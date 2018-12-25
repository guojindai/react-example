/**
 * 左侧菜单栏
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import styles from './SiderMenu.less';

const { Sider } = Layout;
const { SubMenu, Item: MenuItem } = Menu;

@connect(({ routing }) => ({ routing }))
export default class SilderMenu extends Component {
  state = {
    openKeys: [],
  }
  handleClickItem = ({ key }) => {
    if (key) {
      this.props.dispatch(routerRedux.push(key));
    }
  }
  handleOpenSubMenus = (openKeys) => {
    this.setState({ openKeys: openKeys });
  }
  render() {
    const { routing: { location }, collapsed } = this.props;
    const pathname = location && location.pathname;
    const selectedKeys = [];
    const menuOtherProps = {};
    if (pathname) {
      if (!collapsed) {
        const openKeys = this.state.openKeys.slice();
        const openKey = pathname.substring(0, pathname.lastIndexOf('/'));
        if (!openKeys.some(key => openKey === key)) {
          openKeys.push(openKey);
        }
        menuOtherProps.openKeys = openKeys;
      }
      selectedKeys.push(pathname);
    }
    return (
      <Sider className={styles.sider} collapsed={collapsed} >
        <div className={styles.logo}>
          <Link to="/secure">
            {
              !collapsed && <h1>React Example</h1>
            }
          </Link>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          onClick={this.handleClickItem}
          onOpenChange={this.handleOpenSubMenus}
          selectedKeys={selectedKeys}
          {...menuOtherProps}
        >
          <MenuItem key="/secure/home">
            <Icon type="home" />
            <span>首页</span>
          </MenuItem>
          <SubMenu key="/secure/contract" title={<span><Icon type="setting" /><span>合约管理</span></span>}>
            <MenuItem key="/secure/contract/search">合约查询</MenuItem>
            <MenuItem key="/secure/contract/deploy">合约部署</MenuItem>
          </SubMenu>
          <SubMenu key="/secure/user" title={<span><Icon type="user" /><span>用户管理</span></span>}>
            <MenuItem key="/secure/user/search">用户查询</MenuItem>
            <MenuItem key="/secure/user/auth">用户授权</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
