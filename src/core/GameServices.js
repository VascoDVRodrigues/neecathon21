import axios from "axios";
import supabaseClient from "../utils/supabaseClient";
import { Button} from "react-bootstrap"

const GameServices = {
  getTeams: async function (setTeams) {
    try {
      let { data, error, status } = await supabaseClient.from("Teams").select(`*`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setTeams(data);
      }
    } catch (error) {
      alert(error.message);
    }
  },
  getPerson: async function (setAdmin) {
    try {
      let { data, error, status } = await supabaseClient.from("Persons").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        if (data.length !== 1) {
          setAdmin(true);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  },
  getTime: async function (setTime) {
    axios
      .get("http://backend.neecist.xyz/rollTimer")
      .then(function (response) {
        //console.log(response);
        let a = response.data.mm * 60 + response.data.ss;
        setTime(a);
      })
      .catch(function (error) {
        //console.log(error);
      });
  },
  getHouses: async function (setHouses) {
    try {
      let { data, error, status } = await supabaseClient.from("Houses").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setHouses(data);
      }
    } catch (error) {
      alert(error.message);
    }
  },
  rollDice: async function (teamId, setModalShow, setModalText) {
    axios
      .post("http://backend.neecist.xyz/throwDices", {
        token: supabaseClient.auth.currentSession.access_token,
        team: teamId
      })
      .then(function (response) {
        let modalText= ""
     
         
          //let payload = response.data.text
          //if (response.data.buyable===true){
          //  payload += <Button></Button>
          //}
        console.log(response);
        setModalText(modalText)
        setModalShow(true)
      })
      .catch(function (error) {
        console.log(error.response);
      });
  },
};

export default GameServices;
