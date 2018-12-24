import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button } from 'antd';
import './index.less';

@connect()
export default class Login extends Component {
  handleGoBack = () => {
    this.props.dispatch(routerRedux.goBack());
  }
  handleSubmit = () => {
    this.props.dispatch(routerRedux.replace({ pathname: '/secure/home' }));
  }
  render() {
    return (
      <div className="default-page login-page">
        <h2>登陆页面</h2>
        <div className="btns">
          <Button onClick={this.handleGoBack} size="large" className="btn">返回</Button>
          <Button onClick={this.handleSubmit} size="large" type="primary" className="btn">登录</Button>
        </div>
      </div>
    )
  }
}
