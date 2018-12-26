/**
 * 用户授权
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import PageLinkGroup from '../../../components/PageLinkGroup';
import Page from '../../../components/SecureLayout/Page';

@connect()
export default class Home extends Component {
  render() {
    return (
      <Page>
        <div>
          <h1>用户授权</h1>
          <PageLinkGroup />
        </div>
      </Page>
    )
  }
}
