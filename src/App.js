import { useState } from 'react';
import Month from './components/Month';

const months = [
    {
        name: 'January',
        days: 31,
    },
    {
        name: 'February',
        days: 28
    },
    {
        name: 'March',
        days: 30
    },
    {
        name: 'April',
        days: 30
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'June',
        days: 30
    },
    {
        name: 'July',
        days: 31
    },
    {
        name: 'September',
        days: 30
    },
    {
        name: 'October',
        days: 31
    },
    {
        name: 'November',
        days: 30
    },
    {
        name: 'December',
        days: 31
    }];

export const App = () => {
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
        <div>
          <div>
            <h1>{ `${months[currentMonth].name} ${currentYear}` }</h1>
            <button
              onClick={handlePrevius}
            >Previus</button>
            <button
               onClick={handleNext}
            >Next</button>
          </div>
          <Month 
            name={months[month].name}
            days={months[month].days}
            year={year}
          />
        </div>
    );
    }
