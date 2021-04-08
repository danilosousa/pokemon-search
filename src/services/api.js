import axios from 'axios';

const API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });
 export default API 