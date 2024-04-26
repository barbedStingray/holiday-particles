import { useState } from 'react';
import './App.css';
import BackgroundParticles from './Components/BackgroundParticles';
import Header from './Components/Header';
import Clock from './Components/Clock';


function App() {


  const [holiday, setHoliday] = useState('Christmas');
  const [holidate, setHolidate] = useState('');


  return (
    <div className={`holidayParticles ${holiday}`}>

      <Header setHoliday={setHoliday} setHolidate={setHolidate} />

      <div className='backgroundParticles'>
        <BackgroundParticles />
      </div>

      <Clock holiday={holiday} holidate={holidate} />

    </div>
  );
}

export default App;
