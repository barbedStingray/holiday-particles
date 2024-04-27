import React, { useEffect } from 'react';

import ChristmasDoor from '../Photos/christmasDoor.png';
import HalloweenDoor from '../Photos/halloweenDoor.png';
import PatricksDoor from '../Photos/patricksDoor.png';
import ValentinesDoor from '../Photos/valentineDoor.png';
import ThanksgivingDoor from '../Photos/thanksgivingDoor.png';
import IndependenceDoor from '../Photos/independenceDoor.png';

const Header = ({ setHoliday, setHolidate }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const nextYear = currentYear + 1;
  const doorHolidays = [
    {
      name: 'Valentines Day',
      date: `February 14, ${currentYear} 00:00:00`,
      door: ValentinesDoor,
    },
    {
      name: 'St. Patricks Day',
      date: `March 17, ${currentYear} 00:00:00`,
      door: PatricksDoor,
    },
    {
      name: 'Independence Day',
      date: `July 4, ${currentYear} 00:00:00`,
      door: IndependenceDoor,
    },
    {
      name: 'Halloween',
      date: `October 31, ${currentYear} 00:00:00`,
      door: HalloweenDoor,
    },
    {
      name: 'Thanksgiving',
      date: calculateThanksgivingDate(currentYear),
      door: ThanksgivingDoor,
    },
    {
      name: 'Christmas',
      date: `December 25, ${currentYear} 00:00:00`,
      door: ChristmasDoor,
    },
  ];
  // const holidayList = [
  //   {
  //     name: 'Bens Birthday',
  //     date: `May 7, ${currentYear} 00:00:00`,
  //   },
  //   {
  //     name: 'Valentines Day',
  //     date: `February 14, ${currentYear} 00:00:00`,
  //   },
  //   {
  //     name: 'St. Patricks Day',
  //     date: `March 17, ${currentYear} 00:00:00`,
  //   },
  //   {
  //     name: 'Independence Day',
  //     date: `July 4, ${currentYear} 00:00:00`,
  //   },
  //   {
  //     name: 'Halloween',
  //     date: `October 31, ${currentYear} 00:00:00`,
  //   },
  //   {
  //     name: 'Thanksgiving',
  //     date: calculateThanksgivingDate(currentYear),
  //   },
  //   // ? christmas throws an error for some reason when first
  //   {
  //     name: 'Christmas',
  //     date: `December 25, ${currentYear} 00:00:00`,
  //   },
  //   {
  //     name: 'New Years Eve',
  //     date: `January 1, ${nextYear} 00:00:00`,
  //   },
  // ];

  function checkIfDateHasPassed(dateString) {
    const holidayDate = new Date(dateString);
    if (holidayDate < currentDate) {
      return true;
    }
  }
  // holidayList.forEach(holiday => {
  //   if (checkIfDateHasPassed(holiday.date)) {
  //     // console.log('passed holiday date', holiday.date)
  //     holiday.date = holiday.date.replace(currentYear, nextYear);
  //   }
  // });
  doorHolidays.forEach(holiday => {
    if (checkIfDateHasPassed(holiday.date)) {
      // console.log('passed holiday date', holiday.date)
      holiday.date = holiday.date.replace(currentYear, nextYear);
    }
  });

  // calculate Thanksgiving - 4th thursday of November
  function calculateThanksgivingDate(year) {
    // console.log('THANKSGIVING', year);
    const november = new Date(year, 10, 1);
    // console.log('NOV', november);
    let thanksgivingDate = 1;
    // console.log('november.getDay()', november.getDay());
    // find the first thursday
    while (november.getDay() !== 4) {
      november.setDate(++thanksgivingDate);
    }
    thanksgivingDate += 21; // 21 days after is the 4th thursday
    // console.log('THANKSGIVING', `November ${thanksgivingDate}, ${november.getFullYear()},  00:00:00`);
    return `November ${thanksgivingDate}, ${november.getFullYear()},  00:00:00`;
  }

  function changeHoliday(newName, newDate) {
    // console.log('newHoliday', newName, newDate);
    setHoliday(newName);
    setHolidate(newDate);
  }

useEffect(() => {
  setHoliday(`${doorHolidays[0].name}`);
  setHolidate(`${doorHolidays[0].date}`);
}, []);


  return (
    <div className='header'>

      {doorHolidays.map((holiday, i) => (
        <div key={i} onClick={() => changeHoliday(holiday.name, holiday.date)}>
          <img 
            className='doorImage' 
            alt='NBC Door Image'
            src={holiday.door}
          />
        </div>
      ))}
    </div>
  )
}

export default Header
