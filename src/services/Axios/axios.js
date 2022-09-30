import axios from "axios";

export const apiAcess = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  timeout: 5000,
});
