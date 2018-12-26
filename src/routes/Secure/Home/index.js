/**
 * 控制台首页
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import PageLinkGroup from '../../../components/PageLinkGroup';
import request from '../../../utils/request';

@connect()
export default class Home extends Component {
  handleRequestError = (api) => {
    request(api)
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <h1>控制台首页</h1>
        <PageLinkGroup />
        <br />
        <div>
          <Button onClick={() => this.handleRequestError('/api/exception')} type="primary" ghost>网络请求错误</Button>
          <Button onClick={() => this.handleRequestError('/api/exception/body')} type="primary" ghost>网络请求Body错误</Button>
          <Button onClick={() => this.handleRequestError('/api/exception/json')} type="primary" ghost>网络请求Body格式错误</Button>
        </div>
      </div>
    )
  }
}
