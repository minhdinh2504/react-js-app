import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'

function App() {
  return (
    <>
      <h1 className='text-2xl font-bold'>Hello World</h1>
      <FontAwesomeIcon icon={faCalendar} />
    </>
  )
}

export default App
