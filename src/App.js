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
    

    return (
        <div style={{ width: '700px', height: '400px' }}>
          <Month 
            name={months[month].name}
            days={months[month].days}
          />
        </div>
    );
    }
