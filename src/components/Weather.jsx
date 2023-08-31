
import Rise from "../assets/rise.png"
import Set from "../assets/set.png"
import Humidity from "../assets/humidity.png"
import Visibility from "../assets/visibility.png"
import Wind from "../assets/wind.png"
import Pressure from "../assets/pressure.png"
import { formatDate, sunTime } from '../utils/formateTime'

const Weather = ({ weatherData, historyData, historySearch }) => {
    // console.log(weatherData)
    return (
        <div className='weather-details'>
            {
                weatherData.length !== 0
                    ?
                    <>
                        <div className="curr_temp">
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="current-weather" className='weather-icon' />
                            <h1 className='time'>{weatherData.main.temp}&deg;C</h1>
                            <p className='main'>{weatherData.weather[0].main}</p>
                            <p className='date'>{formatDate(weatherData.timezone)}</p>
                        </div>
                        <div className="humidity">
                            <p className='sub-heading'>humidity</p>
                            <h1 className='temp'>{weatherData.main.humidity} %</h1>
                            <img src={Humidity} alt="humid" className='icon' />
                        </div>
                        <div className="pressure">
                            <p className='sub-heading'>pressure</p>
                            <h1 className='temp'>{weatherData.main.pressure} hPa</h1>
                            <img src={Pressure} alt="pressure" className='icon' />
                        </div>
                        <div className="visibility">
                            <p className='sub-heading'>visibility</p>
                            <h1 className='temp'>{(weatherData.visibility) / 1000} Km</h1>
                            <img src={Visibility} alt="visibility" className='icon' />
                        </div>
                        <div className="sun">
                            <p className='sub-heading'>sunset & sunrise</p>
                            <img src={Rise} className='icon' alt="rise" />
                            <h1 className='time'>{sunTime(weatherData.sys.sunrise)}</h1>
                            <img src={Set} className='icon' alt="rise" />
                            <h1 className='time'>{sunTime(weatherData.sys.sunset)}</h1>
                        </div>
                        <div className="wind">
                            <p className='sub-heading'>wind speed</p>
                            <h1 className='temp'>{((weatherData.wind.speed) / 1000).toFixed(3)} Km/hr</h1>
                            <img src={Wind} alt="wind" className='icon' />
                        </div>
                    </>
                    : (
                        <h2>loading</h2>
                    )}
            {/*  
           
           
         */}
        </div>
    )
}

export default Weather