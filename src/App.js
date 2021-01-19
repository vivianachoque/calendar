import { useState } from 'react';
import Month from './components/Month';

const months = [
    {
        name: 'January'
        days: 31
    }
        , 'February', 'March', 'April', 'May', 'August', 'September', 'October', 'November', 'December'];

export const App = () => {
    const today = new Date();
    const month = today.getMonth();
    

    return (
        <div style={{ width: '700px', height: '400px' }}>
          <Month 
            name={months[month]}
          />
        </div>
    );
    }
