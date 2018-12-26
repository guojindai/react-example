/**
 * 404 页面
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd'

@connect()
export default class Page404 extends PureComponent {
  render() {
    return (
      <div>
        <div>404 Page</div>
        <Link to="/"><Button>返回首页</Button></Link>
      </div>
    )
  }
}
