import axios, { AxiosRequestConfig } from 'axios';
import { IAxiosResponse } from '@/types/shims-axios';
// import { IResponse, IPaginationResponse } from '@/api/base';
// import { useUserStore } from '@/store/user';
// import router from '@/router';

const service = axios.create({
    // baseURL: VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    timeout: 10000
});

// 请求拦截
let loadingInstance: any = null;
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在请求头添加token
        // const token = getToken();
        const token = '';

        if (token && config.headers) {
            // TODO: 删掉Bearer
            config.headers.Authorization = `Bearer ${token}`;
        }

        if (import.meta.env.VITE_GRAY_RELEASE && config.headers) {
            config.headers.canary = true;
        }

        if (config.headers && config.headers.loading) {
            loadingInstance = ElLoading.service();
        }

        return config;
    },
    (error: any) => {
        // 统一错误提醒
        ElMessage.error(JSON.stringify(error));
        Promise.reject(error);
        loadingInstance && loadingInstance.close();
    }
);

// 响应拦截
service.interceptors.response.use(
    async (response: IAxiosResponse<IResponse | IPaginationResponse>) => {
        const { code, msg } = response.data;

        // 文件流的形式
        if (response.headers['content-type'].includes('application/octet-stream')) {
            return response;
        }

        loadingInstance && loadingInstance.close();
        switch (code) {
            case 200:
                return response.data;
            case 401:
                ElMessage.error('登录已过期，正在跳转登录页...');
                // const userStore = useUserStore();
                // setTimeout(() => {
                //     userStore.logout();
                //     if (!isPrivate.value) {
                //         redirectSso();
                //     } else {
                //         router.push({ path: '/login' });
                //     }
                // }, 1000);
                return Promise.reject(new Error(msg));
            default:
                ElMessage.error(msg);
                return Promise.reject(new Error(msg));
        }
    },
    ({ message }: any) => {
        // loadingInstance && loadingInstance.close();
        // let error = '';
        // if (message === 'Network Error') {
        //     error = '网络连接异常';
        // } else if (message.includes('timeout')) {
        //     error = '系统接口请求超时';
        // } else if (message.includes('Request failed with status code')) {
        //     error = `系统接口${message.substr(message.length - 3)}异常`;
        // } else {
        // }
        // ElMessage.error({ message: error });
        // return Promise.reject(error);
        console.log(message);
    }
);

export default service;
