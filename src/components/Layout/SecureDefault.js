/**
 * 登录后控制台默认页面结构
 */

import React, { Component, Children } from 'react';
import { Layout, Icon } from 'antd';
import styles from './SecureDefault.less';

const { Header, Footer, Sider, Content } = Layout;

export default class SecureDefault extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className={styles.main}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>{children}</Content>
          <Footer className={styles.footer}>
            <div className={styles.copyright}>
              Copyright <Icon type="copyright" /> 2018 中钞区块链技术研究院
            </div>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
