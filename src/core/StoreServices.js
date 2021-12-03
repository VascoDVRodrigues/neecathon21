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
                setItems(data)
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

export default StoreService