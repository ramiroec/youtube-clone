// src/api/youtube.js
import axios from 'axios';

const KEY = 'AIzaSyCzqyZvhaf3GheelWxDX8_YSldUmT64FDk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
