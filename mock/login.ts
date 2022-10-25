import Mock from 'mockjs'
import { rootRoutes, adminRoutes, userRoutes, routerInfo } from './data/routes'

export default [
  {
    url: '/mock/api/login',
    method: 'POST',
    // timeout: 500,   // 测试延迟
    response: ({ body }) => {
      let role: string = ''
      let routes: routerInfo[] = []
      if (body.username === 'oli@qq.com') {
        role = 'root'
        routes = rootRoutes
      } else if (body.username === 'admin') {
        role = 'admin'
        routes = adminRoutes
      } else {
        role = 'user'
        routes = userRoutes
      }
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
            age: Mock.Random.natural(18, 26),
            role
          },
          routes
        }
      }
    }
  }
]
