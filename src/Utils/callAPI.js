import axios from 'axios';

const callAPI = (method, endpoint, data) => {
    return axios({
        method: method,
        url: `https://api-courses.herokuapp.com${endpoint}`,
        data: data
    })
}

export default callAPI;