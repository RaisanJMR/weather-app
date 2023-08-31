import Earth from './components/Earth'
import Form from './components/Form'
import Weather from './components/Weather'

function App() {
  return (
    <div className='App'>
      <div className='earth'>
        <Earth />
      </div>
      <div className='weather'>
        <Form />
        <Weather />
      </div>
    </div>
  )
}

export default App
