/**
 * 登录后控制台默认页面结构
 */

import React, { PureComponent } from 'react';
import { Layout, Icon } from 'antd';
import Header from './Header';
import SiderMenu from './SiderMenu';
import styles from './index.less';

const { Footer, Content } = Layout;

export default class SecureLayout extends PureComponent {
  state = {
    collapsed: false,
  }
  handleCollapseChange = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout className={styles.main}>
        <SiderMenu collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} onCollapse={this.handleCollapseChange} />
          <Content>{children}</Content>
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
