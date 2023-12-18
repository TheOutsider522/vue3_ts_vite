// 统一管理项目用户相关的接口

import request from '@/utils/request'
import { LoginForm, LoginResponse, UserResponseData } from '@/api/user/type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录接口方法
export const reqLogin = (data: LoginForm) => {
  request.post<any, LoginResponse>(API.LOGIN_URL, data)
}

// 获取用户信息接口方法
export const reqUserInfo = () => {
  request.get<any, UserResponseData>(API.USERINFO_URL)
}
