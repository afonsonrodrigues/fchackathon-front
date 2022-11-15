import axios from "axios";

export default axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://squad27-evolution.herokuapp.com/',
    timeout: 10000
});