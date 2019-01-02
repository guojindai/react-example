/**
 * 附带 header 的页
 */

import React from 'react';
import styles from './HeaderPage.less';

export default React.memo((props) => {
  const { children, title, desc } = props;
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
})
