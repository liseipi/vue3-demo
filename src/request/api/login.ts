import Request from '../request'

const LoginAPI = {
  postLogin(data: any) {
    // console.log(data)
    return Request({
      url: 'api/login',
      method: 'POST',
      data
    })
  }
}

export default LoginAPI
