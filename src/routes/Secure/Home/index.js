import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd'

@connect()
export default class Home extends Component {
  render() {
    return (
      <div>
        <div>控制台首页</div>
        <Link to="/secure/settings"><Button>设置</Button></Link>
      </div>
    )
  }
}
