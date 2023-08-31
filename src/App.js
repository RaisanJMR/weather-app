import Earth from './components/Earth'
import Form from './components/Form'
import Weather from './components/Weather'

import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])
  const [history, setHistory] = useState([])
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
          if (history.indexOf(search) === -1) {
            setHistory([...history, search])
          }
          return response.json()
        }).then((data)=> {
          setWeather(data)
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
  // const historySearchHandler = async (data) => {
  //   setSearch(data)
  //   if (data !== '') {
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=45e167adfbed52217bbf7c0206333a65&units=metric`
  //     )
  //       .then((response) => {
  //         if (history.indexOf(data) === -1) {
  //           setHistory([...history, data])
  //         }
  //         setWeather(response.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }
  return (
    <div className='App'>
      <div className='earth'>
        <Earth />
      </div>
      <div className='weather'>
        <Form
          searchData={search}
          eventHandler={changeSearch}
          searchWeather={searchWeatherHandler}
        />
        <Weather
          weatherData={weather}
          historyData={history}
          // historySearch={historySearchHandler}
        />
      </div>
    </div>
  )
}

export default App
