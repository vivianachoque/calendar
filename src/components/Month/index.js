import React from 'react'

import styles from './index.module.scss';
import Days from '../Days';

export default function Month({ name, days, numMonth, year }) {
  const allDays = [...Array(days).keys()];
  const firstDay = new Date(`${numMonth + 1}-1-${year}`).getDay();
  const lastDay = new Date(`${numMonth + 1}-${days}-${year}`).getDay();

  const previuosEmptyDays =[...Array(firstDay > 0 ? (firstDay) : 0).keys()];

  const nextEmptyDays =[...Array(6 -lastDay).keys()];

  return (
      <div className={styles.containerDays}>
         {
            previuosEmptyDays.map((numDay) => (
               <Days key={numDay} isEmpty />
            ))
         }
         {
            allDays.map((numDay) => (
               <Days key={numDay} numDay={numDay + 1} />
            ))
         }
         {
            nextEmptyDays.map((numDay) => (
               <Days key={numDay} isEmpty />
            ))
         }
      </div>
  )
}
