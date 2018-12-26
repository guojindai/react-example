/**
 * 设置
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import PageLinkGroup from '../../../components/PageLinkGroup';
import HeaderPage from '../../../components/SecureLayout/HeaderPage';

@connect()
export default class Settings extends Component {
  render() {
    return (
      <HeaderPage title="设置" desc="这是一个设置页面...">
        <div>
          <PageLinkGroup />
        </div>
      </HeaderPage>
    )
  }
}
