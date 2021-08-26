import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-project-8d596.cloudfunctions.net/api',
});

export default instance;
