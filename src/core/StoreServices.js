import axios from 'axios';
import supabaseClient from "../utils/supabaseClient";

const StoreService ={
    getComponents:async function (setItems) {
        try {
            let { data, error, status } = await supabaseClient.from("Components").select(`*`);
    
            if (error && status !== 406) {
            throw error;
            }
            if (data) {
              data = data.flatMap(function(item){
                if(item.STOCK === 0){
                  return []
                }else{
                  return item
                }
              })
              setItems(data)
            }
        } catch (error) {
            alert(error.message);
        }
    },
    buyComponents:async function (cart, setModalText) {
        axios.post('http://backend.neecist.xyz/buy', {
            itemList: cart,
            token:supabaseClient.auth.currentSession.access_token
          })
          .then(function (response) {
            setModalText(response.data.message)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    getTeamMoney: async function (setMoney) {
        try {
          let { data, error, status } = await supabaseClient.from("Teams").select(`*`);
    
          if (error && status !== 406) {
            throw error;
          }
          if (data) {
            setMoney(data[0].CASH);
          }
        } catch (error) {
          alert(error.message);
        }
      },
}

export default StoreService