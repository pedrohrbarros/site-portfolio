import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://site-portfolio-api.up.railway.app/api/',
  timeout: 5000,
})