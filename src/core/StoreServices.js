import axios from "axios";
import supabaseClient from "../utils/supabaseClient";

const StoreService = {
  getComponents: async function (setItems) {
    try {
      let { data, error, status } = await supabaseClient.from("Components").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        data = data.flatMap(function (item) {
          if (item.STOCK === 0) {
            return [];
          } else {
            return item;
          }
        });

        let orderedData = data;
        orderedData.sort(function (a, b) {
          if (a.NAME < b.NAME) {
            return -1;
          }
          if (a.NAME > b.NAME) {
            return 1;
          }
          return 0;
        });
        setItems(orderedData);
      }
    } catch (error) {
      alert(error.message);
    }
  },
  buyComponents: async function (cart, setModalText) {
    axios
      .post("http://backend.neecist.xyz/buy", {
        itemList: cart,
        token: supabaseClient.auth.currentSession.access_token,
      })
      .then(function (response) {
        setModalText(response.data.message);
      })
      .catch(function (error) {
        console.log(error.response);
        setModalText(error.response.data.message);
      });
  },
  getTeamMoney: async function (setMoney) {
    try {
      const { data, error } = await supabaseClient.rpc("get_user_team_object");

      if (error) {
        throw error;
      }
      if (data) {
        setMoney(data[0].CASH);
      }
    } catch (error) {
      alert(error.message);
    }
  },
  requestComponent: async function (name, link, quantity, setModalText) {
    let obj = {
      name: name,
      link: link,
      quantity: quantity,
    };
    axios
      .post("http://backend.neecist.xyz/requestComponent", {
        componentObject: obj,
        token: supabaseClient.auth.currentSession.access_token,
      })
      .then(function (response) {
        setModalText(response.data.message);
      })
      .catch(function (error) {
        setModalText(error.response.data.message);
      });
  },
};

export default StoreService;
