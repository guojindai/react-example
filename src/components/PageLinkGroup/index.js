/**
 * 一组链接
 */

import React from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd'

export default React.memo(() => {
  return (
    <div>
      <Link to="/secure"><Button  ghost type="primary">控制台首页</Button></Link>
      <Link to="/secure/contract/search"><Button  ghost type="primary">合约查询</Button></Link>
      <Link to="/secure/contract/deploy"><Button  ghost type="primary">合约部署</Button></Link>
      <Link to="/secure/user/search"><Button  ghost type="primary">用户查询</Button></Link>
      <Link to="/secure/user/search/detail"><Button  ghost type="primary">用户详情</Button></Link>
      <Link to="/secure/user/auth"><Button  ghost type="primary">用户授权</Button></Link>
      <Link to="/secure/settings"><Button  ghost type="primary">设置</Button></Link>
    </div>
  )
})
