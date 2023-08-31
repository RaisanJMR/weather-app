export const INITIAL_STATE = {
  loading: false,
  error: false,
  city: '',
  data: {},
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
        data: action.payload,
      }
    case 'FETCH_ERROR':
      return {
        loading: true,
        error: true,
        city: '',
        data: {},
      }

    default:
      return state
  }
}
