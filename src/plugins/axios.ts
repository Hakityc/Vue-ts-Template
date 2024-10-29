/* 该文件为接口请求封装，包含get, post, put, delete请求  */
/* eslint-disable no-unused-vars */
import _axios, { AxiosRequestHeaders, type AxiosResponse } from "axios";

export interface ResData {
  code: number;
  data: any;
  msg: string;
}


const env = import.meta.env.MODE;
export const baseURL = '';
export const mockURL = "http://127.0.0.1:4523/m1/4641752-4292345-default/";

export const instance = _axios.create({
  baseURL,
  timeout: 10000,
  withCredentials: true,
});

//request 拦截器
instance.interceptors.request.use(
  (config) => {
    // 删除请求参数中值为undefined或null的参数
    for (let key in config.params) {
      if (config.params[key] === undefined || config.params[key] === null) {
        delete config.params[key];
      }
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse<ResData>) => {
  }
);

const axios = instance
export axios