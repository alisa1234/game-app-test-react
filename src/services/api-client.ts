import axios, {AxiosRequestConfig} from "axios";

export  interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null,
}
const axiosInstance =  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eefc109b4a614b8a90391956e5f49117'
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
  }
  get = (id: number | string) => {
    return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data);
  }
}

export default APIClient;