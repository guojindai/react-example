import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Redirect } from 'dva/router';

/**
 * 参考 antd design pro
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 type array } authority
 * @param { 你的权限 type string | array} currentAuthority
 * @param { 通过的组件 } target
 * @param { 未通过的组件 } Exception
 */
const checkPermissions = (authority, currentAuthority, target, Exception) => {
  // 没有判定权限.默认查看所有
  if (!authority) {
    return target;
  }
  // 数组处理
  if (Array.isArray(authority)) {
    if (authority.indexOf(currentAuthority) >= 0) {
      return target;
    }
    if (Array.isArray(currentAuthority)) {
      for (let i = 0; i < currentAuthority.length; i += 1) {
        const element = currentAuthority[i];
        if (authority.indexOf(element) >= 0) {
          return target;
        }
      }
    }
    return Exception;
  }
  throw new Error('unsupported parameters');
};

@connect(({ user }) => ({ user }))
class Authorized extends Component {
  render() {
    const { children, authority, noMatch = null, user } = this.props;
    return checkPermissions(authority, user.authority, children, noMatch);
  }
}

const AuthorizedRoute = ({ authority, component: Component, render, ...rest }) => (
  <Authorized
    authority={authority}
    noMatch={<Route {...rest} render={() => <Redirect to="/login" />} />}
  >
    <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
  </Authorized>
);

export {
  Authorized,
  AuthorizedRoute,
}
