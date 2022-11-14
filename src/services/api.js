import axios from "axios";

export default axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://squad27-server.up.railway.app/',
    timeout: 10000
});