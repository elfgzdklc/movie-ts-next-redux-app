import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL = 'https://dummyjson.com';

const instanceAxios: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
})

instanceAxios.interceptors.request.use(
    (config) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log(config)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

instanceAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default instanceAxios;

//RetryConfig-başarısız bir isteğin 2 defaya kadar tekrarlanması işlemi için

// interface RetryConfig extends AxiosRequestConfig {
//     retry: number;
//     retryDelay: number;
// }
//
// const globalConfig: RetryConfig = {
//     retry: 2,
//     retryDelay: 1000,
// };

// instanceAxios.interceptors.request.use(
//     (response) => response,
//     (error) => {
//         const {config} = error;
//
//         if (!config || !config.retry) {
//             return Promise.reject(error);
//         }
//         config.retry -= 1
//         const delayRetryRequest = new Promise<void>((resolve) => {
//             setTimeout(() => {
//                 console.log("retry the request", config.url);
//                 resolve();
//             }, config.retryDelay || 1000)
//         })
//         return delayRetryRequest.then(() => instanceAxios(config));
//     }
// )

// export {instanceAxios, globalConfig};
