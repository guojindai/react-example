/**
 * 普通的页
 */

import React from 'react';
import styles from './Page.less';

export default React.memo((props) => {
  const { children } = props;
  return (
    <div className={styles.page}>{children}</div>
  )
})
