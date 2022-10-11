import Request from '../request'

const LoginAPI = {
  postLogin(data: any) {
    return Request({
      url: 'api/login',
      method: 'POST',
      data
    })
  }
}

export default LoginAPI
