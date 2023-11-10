// 登录接口需要携带的参数ts对象

export interface LoginForm {
  username: string,
  password: string
}

interface dataType {
  token: string,
}

// 登录接口返回的数据类型
export interface LoginResponse {
  code: number,
  data: dataType
}

interface userInfo {
  userId: number,
  avatar: string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string,
}

interface users {
  checkUser: userInfo
}

// 响应中返回用户信息相关的数据类型
export interface UserResponseData {
  code: number,
  data: users
}