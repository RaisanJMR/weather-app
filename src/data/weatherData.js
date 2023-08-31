const weatherData = {
  coord: {
    lon: 72.8479,
    lat: 19.0144,
  },
  weather: [
    {
      id: 721,
      main: 'Haze',
      description: 'haze',
      icon: '50d',
    },
  ],
  base: 'stations',
  main: {
    temp: 29.99,
    feels_like: 36.01,
    temp_min: 28.94,
    temp_max: 29.99,
    pressure: 1010,
    humidity: 74,
  },
  visibility: 3000,
  wind: {
    speed: 2.06,
    deg: 100,
  },
  clouds: {
    all: 40,
  },
  dt: 1693457166,
  sys: {
    type: 1,
    id: 9052,
    country: 'IN',
    sunrise: 1693443211,
    sunset: 1693488311,
  },
  timezone: 19800,
  id: 1275339,
  name: 'Mumbai',
  cod: 200,
}

module.exports = { weatherData }
