import axios from 'axios';

export const executeRequest = async(url, method, body) => {
    return axios.request({
        url,
        method,
        data: body
    });
}