import axios from "axios";

export default axios.create({
    baseURL: 'https://squad27-evolution.herokuapp.com/',
    timeout: 10000
});
