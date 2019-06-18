/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-07-31 12:11:07
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-15 20:52:58
*/
import axios from 'axios';
import { Toast } from 'vux';
import vue from '../main';
import router from '../router/index';
import { baseUrl } from '../api_config/api';
console.log('vue', vue);
const _requestMap = {};


/**
 * @description ajax请求封装处理
 * @param { String } baseURL 基础url
 * @param { String } url 路径
 * @param { String } method 请求方法
 * @param { Object } data 数据
 * @param { String } type 特殊请求方式  file 表示参数为文件  raw 表示参数需要装化成string
 * @param { String } responseType json|blob
 * @param { String } filename 如果responseType为blob，表示返回文件流，需要设置文件名
 */
export function ajax ({
  baseURL = baseUrl[process.env.NODE_ENV],
  url,
  method = 'post',
  data = {},
  type,
  header,
  responseType = 'json',
  filename = 'download.txt',
  disableLint = false,
}) {
  // 判断是否请求频繁
  const namespace = data == null ? type + url : type + url + JSON.stringify(data);
  const _request = _requestMap[namespace];
  let headers = {};
  if (!disableLint && _request && (_request.isRequest || Date.now() - _request.time < 300)) {
    console.log('请求过于频繁');
    return {};
  }
  _requestMap[namespace] = {
    time: Date.now(),
    isRequest: true,
  };

  let params = null;

  headers.token = localStorage.getItem('token') || '1595718140302';
  headers['Content-Type'] = type === 'json' ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded;charset=UTF-8';

  method = method.toLowerCase();
  if (method === 'get') {
    params = data;
    data = null;
  } else if (method === 'post' && type !== 'json') {
    data = Object.keys(data)
      .filter(key => data[key] != null && data[key] !== '')
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  } else if (method === 'post' && type === 'json') {
    data = JSON.stringify(data);
  } else if (method === 'form') {
    method = 'post';
    headers['Content-Type'] = 'multipart/form-data';
    let formData = new FormData();
    for (let key in data) {
      let item = data[key];
      if (item instanceof Array) { // 如果为类数组对象
        for (let i = 0; i < item.length; i++) {
          formData.append(key, item[i]);
        }
      } else if (item!==null&&item!==undefined) {
        formData.append(key, item);
        console.log(key,formData.get(key));
      }
    };
    data = formData;
  }

  /* 发送请求 */
  return axios({
    baseURL,
    url,
    method,
    data,
    params,
    headers,
    responseType,
    timeout: 50000,
  }).then(response => {
    const { status, data, statusText } = response;
    if (status !== 200) {
      vue.$vux.toast.text(statusText, 'top');
      _requestMap[namespace].isRequest = false;
      return {};
    }
    return data;
  }).then(response => {
    // 二进制流文件 直接返回response
    if (responseType === 'blob') {
      const downloadElement = document.createElement('a');
      const href = window.URL.createObjectURL(response); // 创建下载的链接
      downloadElement.href = href;
      downloadElement.download = filename; // 下载后文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); // 点击下载
      document.body.removeChild(downloadElement); // 下载完成移除元素
      window.URL.revokeObjectURL(href); // 释放掉blob对象
      _requestMap[namespace].isRequest = false;
      return response;
    }
    // json数据 返回data数据
    const { code, message } = response;
    if (+code !== 200) {
      vue.$vux.toast.text(message, 'top');
      _requestMap[namespace].isRequest = false;
      return response;
    }
    _requestMap[namespace].isRequest = false;
    return response;
  }).catch(error => {
    vue.$vux.toast.text(error + '', 'top');
    _requestMap[namespace].isRequest = false;
    return {};
  });
};

/**
 * @description 下载文件请求
 * @param {url} 请求地址
 * @param { param }  请求参数
 */
export function download({
  url,
  params,
}) {
  // 创建form表单下载文件
  const form = document.createElement('form');
  // 填充参数
  for (let key in params) {
    const input = document.createElement('input');
    input.setAttribute('name', key);
    input.setAttribute('value', params[key]);
    form.appendChild(input);
  }
  // 设置请求
  form.setAttribute('method', 'get');
  form.setAttribute('action', url);
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
  // 移除form表单
  document.body.removeChild(form);
  return Promise.resolve();
};
