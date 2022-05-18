import React, { useState } from "react";
import Clock from './components/Clock';
import Select from './components/Select';

import './App.css';

function App() {
  
  const [city, setCity] = useState(null);

  const handleChange = (city) => {
    setCity(city);
  }
  
  return (
    <div className='app'>
      <Clock city={city}/>
      <Select onChange={handleChange} />
    </div>
  );
}

export default App;