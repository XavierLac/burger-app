import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-dda0e.firebaseio.com/'
});

export default instance;
