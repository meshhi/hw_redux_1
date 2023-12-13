import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ServiceList } from './components/ServiceList/ServiceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ServiceList></ServiceList>
    </>
  )
}

export default App
