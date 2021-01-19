import React from 'react'

import styles from './index.module.scss';
import Days from '../Days';

export default function Month({ name, days }) {
  const allDays = [...Array(days - 1).keys()];
  console.log(allDays)
  return (
    <div>
      <h1>{ name }</h1>
      <div className={styles.containerDays}>
         {
            allDays.map((el) => (
               <Days day={el + 1} />
            ))
         }  
      </div>
    </div>
  )
}
