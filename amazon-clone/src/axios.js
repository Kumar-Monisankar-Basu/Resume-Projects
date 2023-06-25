import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'YOUR_API_ENDPOINT_URL'
    
});

export default instance;