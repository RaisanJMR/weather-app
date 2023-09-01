import Form from './components/Form'
import Weather from './components/Weather'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])
  const changeSearch = (value) => {
    setSearch(value)
  }
  const searchWeatherHandler = (e) => {
    e.preventDefault()
    if (search !== '') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=45e167adfbed52217bbf7c0206333a65&units=metric`
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setWeather(data)
        })
        .catch((error) => {
          console.log(error)
       
        })
    }
  }

  return (
    <div className='App'>
      <div className='weather'>
        <Form
          searchData={search}
          eventHandler={changeSearch}
          searchWeather={searchWeatherHandler}
        />
        <Weather weatherData={weather} />
      </div>
    </div>
  )
}

export default App
