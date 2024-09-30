import axios from "axios";
import { baseApi, variables } from "./constants";
const APIURL = `${baseApi}api/v1/`;
const axiosInstance = axios.create({
    baseURL: APIURL,
});
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem(variables.accessToken);
    if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
    }
    // config.headers['Authentication'] = decryptMessage(localStorage.getItem(TOKEN))
    return config;
});
axiosInstance.interceptors.response.use((response) => response.data, (error) => {
    return Promise.reject(error);
});
export default axiosInstance;
