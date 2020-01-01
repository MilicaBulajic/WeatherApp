import React from 'react';

import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <div className="App">
     <WeatherCard temp={-15} condition="Clear" city="Wien" conutry="AUS" />
     <WeatherCard temp={20} condition="Dust" city="Munich" conutry="DE" />
     <WeatherCard temp={40} condition="Tornado " city="Rome" conutry="IT" />
    </div>
  );
}

export default App;
