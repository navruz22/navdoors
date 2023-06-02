import axios from 'axios'
const baseURL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080/api'

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance