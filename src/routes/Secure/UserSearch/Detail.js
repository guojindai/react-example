import React, { PureComponent } from 'react';
import HeaderPage from '../../../components/SecureLayout/HeaderPage';

export default class Detail extends PureComponent {
  render() {
    return (
      <HeaderPage title="用户详情" desc="这个页面的路径不在左侧菜单中，但是左侧菜单相应的祖先菜单项会被选中">
        <div>
          详细数据...
        </div>
      </HeaderPage>
    )
  }
}
