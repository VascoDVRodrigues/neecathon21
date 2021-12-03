import axios from 'axios';
import supabaseClient from "../utils/supabaseClient";
import supabaseAnon from "../utils/supabaseAnon";

const GameServices ={
    getTeam: async function () {
        try {
            let { data, error, status } = await supabaseClient.from("Teams").select(`*`);
    
            if (error && status !== 406) {
            throw error;
            }
            if (data) {
            console.log(data);
            }
        } catch (error) {
            alert(error.message);
        }
        try {
            let { data, error, status } = await supabaseAnon.from("Teams").select(`*`);
    
            if (error && status !== 406) {
            throw error;
            }
            if (data) {
            console.log(data);
            }
        } catch (error) {
            alert(error.message);
        }
    },
    getPerson:async function (setAdmin) {
        try {
            let { data, error, status } = await supabaseClient.from("Persons").select(`*`);
    
            if (error && status !== 406) {
            throw error;
            }
            if (data) {
                if (data.length!==1){
                    setAdmin(true)
                }
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

export default GameServices