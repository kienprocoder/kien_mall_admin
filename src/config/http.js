import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://localhost:8082/api/',
    headers: {
        "Content-type": "application/json",
        "Bearer": localStorage.getItem('token')
    },
})