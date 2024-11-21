import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_FORM_ENDPOINT,
    headers: {
        'Accept': 'application/json'
    }
})