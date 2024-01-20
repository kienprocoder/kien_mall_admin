import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://localhost:8083/api/',
    headers: {
        "Content-type": "application/json",
        "Bearer": localStorage.getItem('token')
    },
})