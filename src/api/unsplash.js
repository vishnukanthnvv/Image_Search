import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0136f500be306cedea983cd2a76c9019c18385b31e2deb177b2247218f619833'
    }
});