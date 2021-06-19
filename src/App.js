import React from 'react';
import CitySelector from './Components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import Fetch from './Hooks/Fetch.js'
import {API_KEY} from './api/config.js';
import WeatherList from './Components/WeatherList.js'

const App = () => {
  // destructure the returned values
  const {data, error, isLoading, setUrl} = Fetch();

  const getContent = () => {
    if(error) return <h2>Error: {error}</h2>
    if(!data && isLoading) return <h2>Loading...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)} />
        
        {getContent()}
    </Container>
  );
};

export default App;