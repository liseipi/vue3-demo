import base from './base'
import axios, { AxiosRequestConfig } from 'axios'
import { useLoadingStore, useUserStore } from '@/store'

const storeLoading = useLoadingStore()
const storeUser = useUserStore()

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
      token: storeUser.token
    })
  }

  if (loading) {
    storeLoading.showLoading()
  }

  return new Promise((resolve, reject) => {
    instance({
      url,
      method,
      params,
      headers
    })
      .then((res) => {
        storeLoading.hideLoading()
        resolve(res.data.data)
      })
      .catch((err) => {
        storeLoading.hideLoading()
        reject(err)
      })
  })
}

export default Request
