import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {

        key: '8e9c0af5763b4adf84765ac7ada07217'
    }

})