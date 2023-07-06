import request from '@/utils/axios';
import { IResponse } from './base';
export interface IUserRow {
    id: string;
    name: string;
}

export function login(data: { userName: string; password: string }) {
    return request.post<IResponse>('/login', data);
}

export function logout() {
    return request.post<IResponse>('/logout');
}

export function getDetail() {
    return request.get<any>('/getInfo');
}

// export function getMyPermissions(params: { appId: string }): any {
//     return request.get<IResponse>('/getRouters', { params });
// }

export function ssoLogin(code: string): Promise<any> {
    return request.get<IResponse>('/sso/login', { params: { code } });
}
