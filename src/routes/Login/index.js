/**
 * 用户登录页面
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Icon, Alert } from 'antd';
import styles from './index.less';

@connect(({ user, loading }) => ({ user, loading }))
class Login extends Component {
  componentWillUnmount() {
    this.props.dispatch({
      type: 'user/resetLoginStatus',
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/login',
          payload: values,
        });
      }
    });
  }
  renderAlert() {
    const { user: { loginStatus } } = this.props;
    if (loginStatus && loginStatus.code === 'ACCOUNT_PASSWORD_ERROR') {
      return <Alert message="用户名或密码错误，请重试" type="error" showIcon className={styles.alert} />;
    }
    return false;
  }
  render() {
    const { form: { getFieldDecorator }, loading } = this.props;
    return (
      <div className={styles.page}>
        <div className={styles.title}>React Example</div>
        <div className={styles.desc}>这个工程是抄的 Antd Pro</div>
        <div className={styles.formContent}>
          {this.renderAlert()}
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  id="userName"
                  prefix={<Icon type="user" className={styles.icon} />}
                  placeholder="用户名"
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入用密码' }],
              })(
                <Input
                  id="password"
                  type="password"
                  prefix={<Icon type="lock" className={styles.icon} />}
                  placeholder="密码"
                  size="large"
                />
              )}
            </Form.Item>
            <Button loading={!!loading.models.user} size="large" type="primary" className={styles.submitBtn} htmlType="submit">登录</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login);
