/**
 * 合约查询
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageLinkGroup from '../../../components/PageLinkGroup';
import Page from '../../../components/SecureLayout/Page';

@connect()
export default class Home extends PureComponent {
  render() {
    return (
      <Page>
        <div>
          <h1>合约查询</h1>
          <PageLinkGroup />
        </div>
      </Page>
    )
  }
}
