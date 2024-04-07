import { authKey } from "@/contants/authkey";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const Instance = axios.create();
Instance.defaults.headers.post["Content-Type"] = "application/json";
Instance.defaults.headers["Accept"] = "application/json";
Instance.defaults.timeout = 60000;

Instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey)
    if(accessToken){
      config.headers.Authorization = accessToken ;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { Instance };
