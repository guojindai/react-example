import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
import styles from './index.less';

@connect()
export default class Index extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.title}>React Example</div>
        <div className={styles.desc}>这是首页，有点击“去登录”跳转到登录页面</div>
        <Link to="/login"><Button size="large" type="primary">去登录</Button></Link>
      </div>
    )
  }
}
