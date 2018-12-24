/**
 * 用户
 */

import { routerRedux } from 'dva/router';
import { login } from '../services/user';

const authority = sessionStorage.getItem('REACT_EXAMPLE_AUTHORITY');

export default {
  namespace: 'user',
  state: {
    authority: authority,
    loginStatus: undefined,
  },
  effects: {
    *login({ payload }, { call, put, all }) {
      const resp = yield call(login, payload);
      const authority = resp.data && resp.data.roles || [];
      yield all([
        put({ type: 'setAuthority', payload: { authority } }),
        put({ type: 'setLoginStatus', payload: { status: resp } }),
      ]);
      if (resp.code === 'SUCCESS') {
        sessionStorage.setItem('REACT_EXAMPLE_AUTHORITY', authority);
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
