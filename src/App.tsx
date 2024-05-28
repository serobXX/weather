import React, { useEffect, useState } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './actions';
import Dayitem from './components/dayitem';
import { WeatherData } from './types/types';

function App() {
  const weatherData = useSelector((state: any) => state.data)
  const [city, setCity] = useState('Yerevan')
  const [startInd, setStartInd] = useState(0)
  const [dayItems, setDayItems] = useState<WeatherData[]>([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const calcDay = (startIndex: number) => {
    const array = weatherData?.daily?.list
    const DayItems = array?.slice(startIndex, startIndex + 4);
    setDayItems(DayItems)
  }
  const handleSearch = (value: string) => {
    setCity(value)
    dispatch(fetchDataRequest({ city: value }))
  }

  useEffect(() => {
    dispatch(fetchDataRequest({ city: city }))
  }, [])
  useEffect(() => {
    if (weatherData) {
      calcDay(startInd)
    }
  }, [startInd, weatherData])

  return (
    <div className='container'>
      <div className='header'>
        <input onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleSearch(value)}>submit</button>
      </div>
      <div style={{ display: "flex" }}>
        <div className="card">
          <h2>{city}</h2>
          <h1>{(weatherData?.current?.main?.temp - 273.15).toFixed(0)}&deg;</h1>
          <div className="sky">
            <div className="sun"></div>
            <div className="cloud">
              <div className="circle-small"></div>
              <div className="circle-tall"></div>
              <div className="circle-medium"></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className='dailyCard' >
            {
              dayItems?.map((elm: WeatherData, index) =>
                < Dayitem key={index} weatherData={elm} />
              )
            }

          </div>


        </div>
      </div>
    </div >
  );
}

export default App;
