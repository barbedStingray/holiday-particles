import React, { useEffect } from 'react';

const Header = ({ setHoliday, setHolidate }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const nextYear = currentYear + 1;
  const holidayList = [
    {
      name: 'Bens Birthday',
      date: `May 7, ${currentYear} 00:00:00`,
    },
    {
      name: 'St. Patricks Day',
      date: `March 17, ${currentYear} 00:00:00`,
    },
    {
      name: 'Christmas',
      date: `December 25, ${currentYear} 00:00:00`,
    },
    {
      name: 'Halloween',
      date: `October 31, ${currentYear} 00:00:00`,
    },
    {
      name: 'New Years Eve',
      date: `January 1, ${nextYear} 00:00:00`,
    },
  ];

  function checkIfDateHasPassed(dateString) {
    const holidayDate = new Date(dateString);
    if (holidayDate < currentDate) {
      return true;
    }
  }
  holidayList.forEach(holiday => {
    if (checkIfDateHasPassed(holiday.date)) {
      // console.log('passed holiday date', holiday.date)
      holiday.date = holiday.date.replace(currentYear, nextYear);
    }
  });

  function changeHoliday(newName, newDate) {
    // console.log('newHoliday', newName, newDate);
    setHoliday(newName);
    setHolidate(newDate);
  }

useEffect(() => {
  setHoliday(`${holidayList[0].name}`);
  setHolidate(`${holidayList[0].date}`);
}, []);


  return (
    <div className='header'>

      {holidayList.map((holiday, i) => (
        <div key={i} onClick={() => changeHoliday(holiday.name, holiday.date)}>
          {holiday.name}
        </div>
      ))}
      <h1>Header</h1>
    </div>
  )
}

export default Header
