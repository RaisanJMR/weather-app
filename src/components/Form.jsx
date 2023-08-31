import React, { useRef } from 'react'


const Form = (props) => {
    const searchInput = useRef();

    return (
        <div className='search-form'>
            <form onSubmit={props.searchWeather}>
                <input type="text" id='city' name='city' placeholder='enter a city' value={props.searchData} onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput} />
                <button type='submit' className='btn'>search</button>
            </form>
        </div>
    )
}

export default Form