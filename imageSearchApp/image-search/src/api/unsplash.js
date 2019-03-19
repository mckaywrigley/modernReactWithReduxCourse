import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 40bdaf803000b0cb28dcbc55ef89093104e9d29854971bb8be382053a0a79fe2'
    }
});