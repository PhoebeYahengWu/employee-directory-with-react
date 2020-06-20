import axios from 'axios';

export default {
    getData: () => axios.get("https://randomuser.me/api/?results=200")
}