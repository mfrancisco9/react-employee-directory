import axios from 'axios';

const apiURL = 'https://randomuser.me/api/?results=40&nat=us';

const apiCall = () => {
    return axios.get(apiURL);
}

export default apiCall;


