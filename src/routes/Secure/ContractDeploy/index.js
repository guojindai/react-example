import React, { Component } from 'react';
import { connect } from 'dva';
import PageLinkGroup from '../../../components/PageLinkGroup';

@connect()
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>合约部署</h1>
        <PageLinkGroup />
      </div>
    )
  }
}
