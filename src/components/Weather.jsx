import React from 'react'
import { weatherData } from '../data/weatherData'
import { useReducer } from 'react'
import { formReducer, INITIAL_STATE } from '../formReducer'
import Rise from "../assets/rise.png"
import Set from "../assets/set.png"
import Humidity from "../assets/humidity.png"
import Visibility from "../assets/visibility.png"
import Wind from "../assets/wind.png"
import Pressure from "../assets/pressure.png"
import { formatDate, sunTime } from '../utils/formateTime'

const Weather = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)
    const { main: { temp, humidity, pressure }, wind: { speed }, sys: { sunset, sunrise }, weather, dt, visibility } = weatherData
    console.log(state)
    return (
        <div className='weather-details'>
            <div className="curr_temp">
                <img src="https://openweathermap.org/img/wn/50d@2x.png" alt="current-weather" className='weather-icon' />
                <h1 className='time'>{temp}&deg;C</h1>
                <p className='main'>{weather[0].main}</p>
                <p className='date'>{formatDate(dt)}</p>
            </div>
            <div className="humidity">
                <p className='sub-heading'>humidity</p>
                <h1 className='temp'>{humidity}</h1>
                <img src={Humidity} alt="humid" className='icon' />
            </div>
            <div className="pressure">
                <p className='sub-heading'>pressure</p>
                <h1 className='temp'>{pressure}</h1>
                <img src={Pressure} alt="pressure" className='icon' />
            </div>
            <div className="visibility">
                <p className='sub-heading'>visibility</p>
                <h1 className='temp'>{(visibility) / 1000} Km</h1>
                <img src={Visibility} alt="visibility" className='icon' />
            </div>
            <div className="sun">
                <p className='sub-heading'>sunset & sunrise</p>
                <img src={Rise} className='icon' alt="rise" />
                <h1 className='time'>{sunTime(sunrise)}</h1>
                <img src={Set} className='icon' alt="rise" />
                <h1 className='time'>{sunTime(sunset)}</h1>
            </div>
            <div className="wind">
                <p className='sub-heading'>wind</p>
                <h1 className='temp'>{(speed) / 1000} Km</h1>
                <img src={Wind} alt="wind" className='icon' />
            </div>
        </div>
    )
}

export default Weather