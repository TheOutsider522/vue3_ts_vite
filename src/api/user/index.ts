// 统一管理项目用户相关的接口

import request from '@/utils/request'
import { LoginForm, LoginResponse, UserResponseData } from '@/api/user/type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm) => {
  request.post<any, LoginResponse>(API.LOGIN_URL, data)
}

export const reqUserIngo = () => {
  request.get<any, UserResponseData>(API.USERINFO_URL)
}
