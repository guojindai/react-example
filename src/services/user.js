/**
 * 用户接口调用
 */

import request from '../utils/request';

export const login = (params) => {
  return request('/api/login', {
    method: 'POST',
    body: params,
  });
};
