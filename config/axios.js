import axios from "axios";
const SERVER_URL = "http://localhost:3000/api"; //Url of the server
const instance= axios.create({
    baseURL: SERVER_URL,
    timeout: 3000
})
export default instance;