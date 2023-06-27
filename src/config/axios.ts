import axios from "axios";
import getVariables from "../helpers/getVariables";

const { VITE_API_URL } = getVariables()


const connectAPI = axios.create({
    baseURL: VITE_API_URL
})


connectAPI.interceptors.request.use(
    config => {
        config.headers['jwt'] = `${localStorage.getItem('jwt')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


export default connectAPI