import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';

@connect()
export default class Index extends Component {
  render() {
    return (
      <div className="default-page index-page">
        <h2>网站首页</h2>
        <Link to="/login"><Button size="large" type="primary">去登录</Button></Link>
      </div>
    )
  }
}
