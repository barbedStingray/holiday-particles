import React, { useState, useEffect, useRef } from 'react';


const Clock = ({ holiday, holidate }) => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const prevHoliday = useRef(null);

  let interval = useRef();

  function runCountdown() {
    //   const countdownDate = new Date(holidate);
    //   const countdownDate = new Date(`May 30, 2024 00:00:00`);

    //   interval = setInterval(() => {
    //     const now = new Date().getTime();
    //     const distance = countdownDate - now;

    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    //     const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    //     const seconds = Math.floor(distance % (1000 * 60) / (1000));

    //     if (distance < 0) {
    //       // stop the timer
    //       clearInterval(interval.current);
    //     } else {
    //       // update the time
    //       setTimerDays(days);
    //       setTimerHours(hours);
    //       setTimerMinutes(minutes);
    //       setTimerSeconds(seconds);
    //     }

    //   }, 1000);

  };

  // useEffect(() => {
  //     runCountdown();
  //     return () => {
  //       clearInterval(interval.current);
  //     };
  //   }, []);

  useEffect(() => {

    if (prevHoliday.current !== holiday) {
      clearInterval(interval.current);
      prevHoliday.current = holiday;
      const countdownDate = new Date(holidate);


      interval.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / (1000));

        if (distance < 0) {
          // stop the timer
          clearInterval(interval.current);
        } else {
          // update the time
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }

      }, 1000);



    }
  }, [holiday, holidate]);




  return (
    <div className="clock">
      <div className='holidayTitle'>
        <h1>{holiday}</h1>
      </div>


      <div className='clockDisplay'>
        <div className='timeBlock'>
          <h2 className='unit'>Days</h2>
          <h3 className='time'>{timerDays}</h3>
        </div>
        <div className='timeBlock'>
          <h2 className='unit'>Hrs</h2>
          <h3 className='time'>{timerHours}</h3>
        </div>
        <div className='timeBlock'>
          <h2 className='unit'>Min.</h2>
          <h3 className='time'>{timerMinutes}</h3>
        </div>
        <div className='timeBlock'>
          <h2 className='unit'>Sec'</h2>
          <h3 className='time'>{timerSeconds}</h3>
        </div>
      </div>



    </div>
  )
}

export default Clock
