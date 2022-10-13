import axios from "axios";

export const Api = axios.create({
  baseURL: 'http://localhost:3030/'
})

export const ApiPrivate = axios.create({
  baseURL: 'http://localhost:3030/',
})