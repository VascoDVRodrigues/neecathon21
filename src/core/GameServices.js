import axios from "axios";
import supabaseClient from "../utils/supabaseClient";
import { Button } from "react-bootstrap";

const GameServices = {
  getTeams: async function (setTeams) {
    try {
      let { data, error, status } = await supabaseClient.from("Teams").select(`*`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        data.sort((a, b) => a.IDTEAM - b.IDTEAM);
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
        let a = response.data.mm * 60 + response.data.ss;
        setTime(a);
      })
      .catch(function (error) {});
  },
  getHouses: async function (setHouses) {
    try {
      let { data, error, status } = await supabaseClient.from("Houses").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        data.sort((a, b) => a.IDHOUSE - b.IDHOUSE);
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
        team: teamId,
      })
      .then(function (response) {
        let modalText = "";
        if (response.data.status === "Success") {
          modalText = response.data.description;
          if (response.data.interactable) {
            setModalText([
              modalText,
              <Button
                onClick={() => {
                  GameServices.buyHouse(response.data.teamID);
                }}
              >
                Buy
              </Button>,
            ]);
          } else {
            setModalText(<div dangerouslySetInnerHTML={{ __html: modalText }} />);
          }

          setModalShow(true);
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  },
  buyHouse: function (teamID) {
    axios
      .post("http://backend.neecist.xyz/buyPatent", {
        token: supabaseClient.auth.currentSession.access_token,
        team: teamID,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error.response);
      });
  },
  updateKey: function (setKey) {
    setKey(Math.random());
  },
};

export default GameServices;
