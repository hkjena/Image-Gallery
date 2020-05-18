import axios from 'axios';
const KEY = 'ePCbcySRDcFwVECg8VuSzCXm1Aq7jwmrBMn-2ob4tZE';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
