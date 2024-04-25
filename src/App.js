import logo from './logo.svg';
import { useRef, useEffect, useState } from 'react';
import './App.css';
import BackgroundParticles from './Components/BackgroundParticles';
import Header from './Components/Header';


function App() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  function runCountdown() {
    const countdownDate = new Date(`May 30, 2024 00:00:00`);

    interval = setInterval(() => {
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

  };

  useEffect(() => {
    runCountdown();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="holidayParticles">

      <Header />

      <div className='backgroundParticles'>
        <BackgroundParticles />
      </div>

      <div className="content">
        {/* Your page content goes here */}
        <h1>This will be the countdown</h1>
      </div>

    </div>
  );
}

export default App;
