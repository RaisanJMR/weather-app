export const INITIAL_STATE = {
  loading: false,
  error: false,
  city: '',
  main: '',
  weather: '',
  date: '',
  windspeed: '',
  time: '',
  visibility: '',
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        main: action.payload.main,
        weather: action.payload.weather,
        date: action.payload.dt,
        windspeed: action.payload.wind,
        time: action.payload.sys,
        visibility: action.payload.visibility,
      }
    case 'FETCH_ERROR':
      return {
        loading: true,
        error: true,
        city: '',
        main: '',
        weather: '',
        date: '',
        windspeed: '',
        time: '',
        visibility: '',
      }

    default:
      return state
  }
}
