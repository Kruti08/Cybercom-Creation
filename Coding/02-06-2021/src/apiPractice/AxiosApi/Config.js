import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-app-8080d-default-rtdb.firebaseio.com/'
})