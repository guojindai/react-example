import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd'

@connect()
export default class Login extends Component {

  render() {
    return (
      <div className="login-page">
        <div>Login Form</div>
        <Link to="/secure/home"><Button>Hello</Button></Link>
      </div>
    )
  }

}
