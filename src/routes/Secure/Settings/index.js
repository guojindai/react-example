/**
 * 设置
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import PageLinkGroup from '../../../components/PageLinkGroup';

@connect()
export default class Settings extends Component {
  render() {
    return (
      <div>
        <h1>设置</h1>
        <PageLinkGroup />
      </div>
    )
  }
}
