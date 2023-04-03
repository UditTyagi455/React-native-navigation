import { create } from "apisauce";

const domain = "https://sokonis.com/staging/";
const apiKey = "5ae08967-06f2-4d23-93d3-cd29a083ce2e";
const apiRequestTimeOut = 60000; // 30 secs

const api = create({
  baseURL: domain + "/wp-json/rtcl/v1/",
  headers: {
    Accept: "application/json",
    "X-API-KEY": apiKey,
  },
  timeout: apiRequestTimeOut,
});

const setAuthToken = (token) =>{
  // console.log('token ::',token);
  api.setHeader("Authorization", "Bearer " + token);
}
  
const removeAuthToken = () => api.deleteHeader("Authorization");
const setMultipartHeader = () =>
  api.setHeader("Content-Type", "multipart/form-data");
const removeMultipartHeader = () => api.deleteHeader("Content-Type");
const setLocale = (lng) => api.setHeader("X-LOCALE", lng);
const setCurrencyLocale = (cur) => api.setHeader("X-LOCALE-CURRENCY", cur);

export default api;
export {
  setAuthToken,
  removeAuthToken,
  setMultipartHeader,
  removeMultipartHeader,
  setLocale,
  apiKey,
  setCurrencyLocale,
};
