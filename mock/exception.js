/**
 * 异常模拟接口
 */

import { delay } from './utils';

const api = {
  'GET /api/exception': (req, res) => {
    res.status(404).send('Not found');
  },
  'GET /api/exception/body': (req, res) => {
    res.send({
      code: 'NOT_FOUND',
      data: undefined,
    });
  },
  'GET /api/exception/json': (req, res) => {
    res.send('abc');
  },
}

export default delay(api, 1000);
