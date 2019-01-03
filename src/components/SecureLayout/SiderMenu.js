/**
 * 左侧菜单栏
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import { cutPath } from '../../utils/url';
import styles from './SiderMenu.less';

const { Sider } = Layout;
const { SubMenu, Item: MenuItem } = Menu;

const MENU_CONFIG = [
  { path: '/secure/home', name: '首页', icon: 'home' },
  {
    path: '/secure/contract',
    name: '合约管理',
    icon: 'paper-clip',
    children: [
      { path: '/secure/contract/search', name: '合约查询' },
      { path: '/secure/contract/deploy', name: '合约部署' },
    ],
  },
  {
    path: '/secure/user',
    name: '用户管理',
    icon: 'user',
    children: [
      { path: '/secure/user/search', name: '用户查询' },
      { path: '/secure/user/auth', name: '用户授权' },
    ],
  },
];

const MENU_PATH_MAP = createMenuPathMap(MENU_CONFIG);

function createMenuPathMap(config) {
  const map = {};
  config.forEach((subConfig) => {
    const { path, children } = subConfig;
    map[path] = true;
    if (children) {
      Object.assign(map, createMenuPathMap(children));
    }
  });
  return map;
}

@connect(({ routing }) => ({ routing }))
export default class SilderMenu extends PureComponent {
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
  findNearestPath = (path) => {
    if (path === '/secure') {
      return;
    } else if (MENU_PATH_MAP[path]) {
      return path;
    } else {
      return this.findNearestPath(cutPath(path));
    }
  }
  renderMenuItems(config) {
    return config.map((subConfig) => {
      const { path, name, icon, children } = subConfig;
      if (subConfig.children) {
        return (
          <SubMenu key={path} title={icon && <span><Icon type={icon} /><span>{name}</span></span>}>
            {this.renderMenuItems(children)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem key={path}>{!!icon && <Icon type={icon} />}<span>{name}</span></MenuItem>
        );
      }
    });
  }
  render() {
    const { routing: { location }, collapsed } = this.props;
    const realPath = location && location.pathname;
    const selectedKeys = [];
    const menuOtherProps = {};
    const path = this.findNearestPath(realPath);
    if (path) {
      if (!collapsed) {
        const openKeys = this.state.openKeys.slice();
        const openKey = cutPath(path);
        if (MENU_PATH_MAP[openKey] && !openKeys.some(key => openKey === key)) {
          openKeys.push(openKey);
        }
        menuOtherProps.openKeys = openKeys;
      }
      selectedKeys.push(path);
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
          {this.renderMenuItems(MENU_CONFIG)}
        </Menu>
      </Sider>
    )
  }
}
