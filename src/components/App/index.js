import { useState } from 'react';
import Month from '../Month';
import MONTHS from './constants/months'
import styles from './index.module.scss';


const App = () => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const [currentMonth, setCurrentMonth] = useState(month);
    const [currentYear, setCurrentYear] = useState(year);
    

    const handleNext = () => {
        if (currentMonth < 11) {
            setCurrentMonth(currentMonth + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        }
    }

    const handlePrevius = () => {
        if (currentMonth > 0) {
            setCurrentMonth(currentMonth - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        }
    }

    return (
        <div className={styles.containerCalendar}>
          <div className={styles.containerDate}>
            <h1 className={styles.date}>{ `${MONTHS[currentMonth].name} ${currentYear}` }</h1>
            <button 
              className={styles.button}
              onClick={handlePrevius}
            >
              Previous
            </button>
            <button
               className={styles.button}
               onClick={handleNext}
            >
              Next
            </button>
          </div>
          <Month 
            name={MONTHS[currentMonth].name}
            days={MONTHS[currentMonth].days}
            year={year}
          />
        </div>
    );
    }

export default App;
