import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'


export const axios = Axios.create({
    baseURL: '/api'
})

axios.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    config.headers.apiKey = import.meta.env.VITE_API_KEY
    return config
})