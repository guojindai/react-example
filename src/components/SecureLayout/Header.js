/**
 * 顶部 Header
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Icon, Tooltip, Dropdown, Menu, Avatar } from 'antd';
import styles from './Header.less';

const { Item: MenuItem } = Menu;

@connect()
export default class Header extends Component {
  handleToggleCollapse = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  }
  handleClickMenu = ({ key }) => {
    if (key === 'settings') {
      this.props.dispatch(routerRedux.push('/secure/settings'));
    } else if (key === 'logout') {
      this.props.dispatch({ type: 'user/logout' });
    }
  }
  renderMenu() {
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.handleClickMenu}>
        <MenuItem key="settings"><Icon type="setting" />账号设置</MenuItem>
        <Menu.Divider />
        <MenuItem key="logout"><Icon type="logout" />退出</MenuItem>
      </Menu>
    );
    return menu;
  }
  render() {
    const { collapsed } = this.props;
    return (
      <Layout.Header className={styles.layoutHeader}>
        <div className={styles.header}>
          <span className={styles.trigger} onClick={this.handleToggleCollapse}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </span>
          <div className={styles.right}>
            <Tooltip title="帮助">
              <Icon type="question-circle-o" />
            </Tooltip>
            <Dropdown overlay={this.renderMenu()}>
              <span className={`${styles.action} ${styles.account}`}>
                <Avatar
                  size="small"
                  className={styles.avatar}
                  icon="user"
                />
                <span className={styles.name}>张三</span>
              </span>
            </Dropdown>
          </div>
        </div>
      </Layout.Header>
    )
  }
}
