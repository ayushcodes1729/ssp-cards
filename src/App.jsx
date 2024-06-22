import { useState } from 'react'
import './App.css'
import Services from './Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Services/>
    </>
  )
}

export default App
