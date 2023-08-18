import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL = 'https://dummyapi.online/api';

const instanceAxios: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },

})

instanceAxios.interceptors.request.use(
    (config) => {
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
