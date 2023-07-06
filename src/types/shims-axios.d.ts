import { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface IAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
    showLoading?: boolean;
}
export interface IAxiosResponse<T, D = any> extends AxiosResponse<T, D> {
    config: IAxiosRequestConfig<D>;
}

declare module 'axios' {
    export interface AxiosInstance {
        get<T = any, D = any>(url: string, config?: IAxiosRequestConfig<D>): Promise<T>;
        delete<T = any, D = any>(url: string, config?: IAxiosRequestConfig<D>): Promise<T>;
        post<T = any, D = any>(url: string, data?: D, config?: IAxiosRequestConfig<D>): Promise<T>;
        put<T = any, D = any>(url: string, data?: D, config?: IAxiosRequestConfig<D>): Promise<T>;
        <D = any>(config: IAxiosRequestConfig<D>): Promise<any>;
    }
    // export qs
}
