import React from 'react'
import styles from './index.module.scss';

export default function Days({ numDay, isEmpty}) {
  return (
    <div className={isEmpty ? styles.containerDayEmpty : styles.containerDay}>
      <p className={styles.numDay}>{ numDay }</p>
    </div>
  )
}
