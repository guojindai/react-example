import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd'

@connect()
export default class Settings extends Component {
  render() {
    return (
      <div className="default-page settings-page">
        <div>设置</div>
        <Link to="/secure/home"><Button>返回控制台首页</Button></Link>
      </div>
    )
  }
}
