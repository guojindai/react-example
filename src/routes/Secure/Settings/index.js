/**
 * 设置
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import PageLinkGroup from '../../../components/PageLinkGroup';
import Page from '../../../components/SecureLayout/Page';

@connect()
export default class Settings extends Component {
  render() {
    return (
      <Page>
        <div>
          <h1>设置</h1>
          <PageLinkGroup />
        </div>
      </Page>
    )
  }
}
