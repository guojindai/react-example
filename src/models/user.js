/**
 * 用户
 */

import { routerRedux } from 'dva/router';
import { login } from '../services/user';

export default {
  namespace: 'user',
  state: {
    authority: undefined,
    loginStatus: undefined,
  },
  effects: {
    *login({ payload }, { call, put, all }) {
      const resp = yield call(login, payload);
      const roles = resp.data && resp.data.roles || [];
      yield all([
        put({ type: 'setAuthority', payload: { authority: roles } }),
        put({ type: 'setLoginStatus', payload: { status: resp } }),
      ]);
      if (resp.code === 'SUCCESS') {
        yield put(routerRedux.replace('/secure'));
      }
    },
  },
  reducers: {
    setAuthority(state, { payload: { authority } }) {
      return {
        ...state,
        authority,
      };
    },
    setLoginStatus(state, { payload: {  status } }) {
      return {
        ...state,
        loginStatus: status,
      };
    },
    resetLoginStatus(state) {
      return {
        ...state,
        loginStatus: undefined,
      };
    },
  },
};
