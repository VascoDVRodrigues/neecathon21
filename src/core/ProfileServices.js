import supabaseClient from "../utils/supabaseClient";

const ProfileServices = {
  getTeam: async function (setTeam) {
    try {
      let { data, error, status } = await supabaseClient.from("Teams").select(`*`);

      if (error && status !== 406) {
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
      let { data, error, status } = await supabaseClient.from("TeamMembers").select(`*`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        var array = [];

        data.forEach((element) => {
          array.push(element.Name);
        });
        setTeamMembers(array);
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
        var array = new Array();
        for (const component of data) {
          var item = { QUANTITY: component.QUANTITY };
          try {
            let { data, error, status } = await supabaseClient.from("Components").select(`*`).eq("IDCOMPONENT", component.IDCOMPONENT);

            if (error && status !== 406) {
              throw error;
            }
            if (data) {
              item.NAME = data[0].NAME;
              array.push(item);
            }
          } catch (error) {
            alert(error.message);
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
