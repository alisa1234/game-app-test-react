import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eefc109b4a614b8a90391956e5f49117'
  }
})