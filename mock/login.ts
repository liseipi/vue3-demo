import Mock from 'mockjs'

export default [
  {
    url: '/mock/api/login',
    method: 'POST',
    // timeout: 500,   // 测试延迟
    response: () => {
      return {
        code: 200,
        message: 'OK',
        data: {
          token: Mock.Random.string('lower', 200),
          userInfo: {
            id: Mock.Random.id(),
            name: Mock.Random.cname(),
            email: Mock.Random.email(),
            gender: Mock.Random.natural(1, 2),
            age: Mock.Random.natural(18, 26)
          }
        }
      }
    }
  }
]
