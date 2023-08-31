import { useReducer } from 'react'
import { BASE_URL, API_KEY } from '../apiKey'
import { INITIAL_STATE, formReducer } from '../formReducer'

const Form = () => {

    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.city === "") {
            return alert("empty field")
        }
        dispatch({ type: "FETCH_START" })
        fetch(`${BASE_URL}weather?q=${state.city}&APPID=${API_KEY}&units=metric`).then((res) => {
            return res.json()
        }).then((data) => {
            dispatch({ type: "FETCH_SUCCESS", payload: data })
        }).catch((err) => {
            dispatch({ type: "FETCH_ERROR" })
        })
    }

    const handleChange = (e) => {
        dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } })
    }
    // console.log(state)
    return (
        <div className='search-form'>
            <form onSubmit={handleSubmit}>
                <input type="text" id='city' name='city' placeholder='enter a city' onChange={handleChange} />
                <button type='submit' className='btn'>search</button>
            </form>
        </div>
    )
}

export default Form