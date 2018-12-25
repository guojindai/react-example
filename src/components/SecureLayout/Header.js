import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import styles from './Header.less';

export default class Header extends Component {
  handleToggleCollapse = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  }
  render() {
    const { collapsed } = this.props;
    return (
      <Layout.Header className={styles.layoutHeader}>
        <div className={styles.header}>
          <span className={styles.trigger} onClick={this.handleToggleCollapse}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </span>
        </div>
      </Layout.Header>
    )
  }
}
