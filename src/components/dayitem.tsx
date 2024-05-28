import React from 'react'
import { WeatherData } from '../types/types'

export default function Dayitem(props: { weatherData: WeatherData }) {

    return (
        <div className='dayItem'>
            <b>{props.weatherData?.dt_txt?.split(' ')[1]}</b> <br /><b> {(props.weatherData?.main?.temp - 273.15).toFixed(0)}&deg;</b>
        </div>
    )
}
