/**
 * 包装了 fetch
 */

import fetch from 'dva/fetch';
import { message } from 'antd';

const CODE_REQUEST_MESSAGE = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const CODE_REQUEST_BODY_ERROR_MESSAGE = {
  'NOT_FOUND': CODE_REQUEST_MESSAGE['404'],
};

const DEFAULT_OPTIONS = {
  credentials: 'include',
};

const newError = (name, message, response) => {
  const error = new Error(message);
  error.name = name;
  error.response = response;
  error.type = 'NETWORK';
  return error;
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = CODE_REQUEST_MESSAGE[response.status] || response.statusText;
  alertError(`请求错误 ${response.status}: ${errortext}, ${response.url}`);
  throw newError(response.status, errortext, response);
};

const parseBody = (response) => {
  return response.text()
    .then(text => {
      try {
        const data = JSON.parse(text);
        return { data, response };
      } catch (_) {
        return { data: text, response };
      }
    });
}

const checkBody = ({ data, response }) => {
  if (data && data.code) {
    const errortext = CODE_REQUEST_BODY_ERROR_MESSAGE[data.code];
    // 统一处理的错误 code
    if (errortext) {
      alertError(`请求错误 ${data.code}: ${errortext}, ${response.url}`);
      throw newError(data.code, errortext, response);
    }
    // 正常数据
    return data;
  } else {
    // 返回的 body 不符合格式要求
    alertError(`请求返回数据格式错误, ${response.url}`);
    throw newError('请求返回数据错误', data, response);
  }
};

const alertError = (msg) => {
  message.error(msg);
}


export default (url, options) => {
  const newOptions = { ...DEFAULT_OPTIONS, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseBody)
    .then(checkBody);
}
