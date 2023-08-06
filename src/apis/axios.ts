import _axios, { type AxiosResponse } from 'axios'

interface CmdData {
  code: number
  data: any
  message: string
}

export interface CmdError {
  isCmdError: true
  code: number
  data: any
  message: string
}

const instance = _axios.create({
  baseURL: '/api',
})

instance.interceptors.response.use((response: AxiosResponse<CmdData>) => {
  if (response.data.code !== 0) {
    return Promise.reject({
      isCmdError: true,
      ...response.data,
    })
  }
  response.data = response.data.data
  return response
})

export const axios = instance
