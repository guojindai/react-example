/**
 * 用户相关接口
 */

import { delay } from './utils';

const api = {
  'POST /api/login': (req, res) => {
    const { password, userName, type } = req.body;
    if (userName === 'user' && password === 'user') {
      res.send({
        code: 'SUCCESS',
        data: {
          userName: "user",
          roles: [ 'USER' ],
        },
      });
    } else if (userName === 'admin' && password === 'admin') {
      res.send({
        code: 'SUCCESS',
        data: {
          userName: "admin",
          roles: [ 'ADMIN' ],
        },
      });
    } else {
      res.send({
        code: 'ACCOUNT_PASSWORD_ERROR',
        data: undefined,
      });
    }
  },
}

export default delay(api, 1000);
