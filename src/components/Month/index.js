import React from 'react'

import styles from './index.module.scss';
import Days from '../Days';

export default function Month({ name, days }) {
  const allDays = [...Array(days).keys()];
  console.log(new Date('01-19-2021').getDay());
  return (
      <div className={styles.containerDays}>
         {
            allDays.map((numDay) => (
               <Days key={numDay} numDay={numDay + 1} />
            ))
         }
      </div>
  )
}
