import supabaseClient from "../utils/supabaseClient";

const ProfileServices = {
  getTeam: async function (setTeam) {
    try {
      const { data, error } = await supabaseClient.rpc("get_user_team_object");

      if (error) {
        throw error;
      }
      if (data) {
        setTeam(data);
      }
    } catch (error) {
      alert(error.message);
    }
  },

  getTeamMembers: async function (setTeamMembers) {
    try {
      let { data, error, status } = await supabaseClient.rpc("get_team_members");

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setTeamMembers(data);
      }
    } catch (error) {
      alert(error.message);
    }
  },

  getTeamComponents: async function (setTeamComponents) {
    try {
      let { data, error, status } = await supabaseClient.from("Components|Team").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        data.sort((a, b) => {
          return a.IDCOMPONENT - b.IDCOMPONENT;
        });
        var array = new Array();
        var prevID = -1;
        for (const component of data) {
          if (prevID === component.IDCOMPONENT) {
            array[array.length - 1].QUANTITY += component.QUANTITY;
            //console.log(prevID, component);
          } else {
            var item = { QUANTITY: component.QUANTITY };
            try {
              let { data, error, status } = await supabaseClient.from("Components").select(`*`).eq("IDCOMPONENT", component.IDCOMPONENT);

              if (error && status !== 406) {
                throw error;
              }
              if (data) {
                item.NAME = data[0].NAME;
                item.REFSHEET = data[0].REFSHEET;
                item.IMAGE = data[0].IMAGE;
                array.push(item);
              }
            } catch (error) {
              alert(error.message);
            }
            prevID = component.IDCOMPONENT;
          }
        }
        setTeamComponents(array);
      }
    } catch (error) {
      alert(error.message);
    }
  },

  getTeamHouses: async function (setTeamHouses) {
    try {
      let { data, error, status } = await supabaseClient.from("Houses|Team").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        console.log(data);
        var array = new Array();
        for (const house of data) {
          var item = { IDHOUSE: house.IDHOUSE, NAME: "", COLOR: "" };
          try {
            let { data, error, status } = await supabaseClient.from("Houses").select(`*`).eq("IDHOUSE", house.IDHOUSE);

            if (error && status !== 406) {
              throw error;
            }

            if (data) {
              item.NAME = data[0].NAME;
              item.COLOR = data[0].COLOR;

              array.push(item);
            }
          } catch (error) {
            alert(error.message);
          }
        }
        setTeamHouses(array);
      }
    } catch (error) {
      alert(error.message);
    }
  },
};

export default ProfileServices;
