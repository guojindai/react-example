/**
 * 登录后控制台默认页面结构
 */

import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import SiderMenu from './SiderMenu';
import styles from './index.less';

const { Header, Footer, Content } = Layout;

export default class SecureLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className={styles.main}>
        <SiderMenu />
        <Layout>
          <Header>Header</Header>
          <Content className={styles.content}>{children}</Content>
          <Footer className={styles.footer}>
            <div className={styles.copyright}>
              Copyright <Icon type="copyright" /> 2018 React Example 团伙
            </div>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
