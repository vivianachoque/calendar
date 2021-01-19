import React from 'react'
import styles from './index.module.scss';

export default function Days({ numDay }) {
  return (
    <div className={styles.containerDay}>
      <p className={styles.numDay}>{ numDay }</p>
    </div>
  )
}
