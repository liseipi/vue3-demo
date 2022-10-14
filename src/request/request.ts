import base from './base'
import axios, { AxiosRequestConfig } from 'axios'
import store from '@/store'

const instance = axios.create({
  timeout: base.timeout
})

instance.defaults.baseURL = base.baseURL

interface AxiosConfig extends AxiosRequestConfig {
  loading?: boolean
}

const Request = ({
  url = '',
  method = 'GET',
  data = {},
  params = {},
  headers = {
    'Content-Type': 'application/json'
  },
  loading = true
}: AxiosConfig) => {
  if (localStorage.getItem('token')) {
    Object.assign(headers, {
      token: localStorage.getItem('token')
    })
  }

  if (loading) {
    store.commit('loading/showLoading')
  }

  return new Promise((resolve, reject) => {
    instance({
      url,
      method,
      params,
      headers
    })
      .then((res) => {
        store.commit('loading/hideLoading')
        resolve(res.data.data)
      })
      .catch((err) => {
        store.commit('loading/hideLoading')
        reject(err)
      })
  })
}

export default Request
