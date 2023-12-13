import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ServiceList } from './components/ServiceList/ServiceList'
import { ServiceFilter } from './components/ServiceFilter/ServiceFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ServiceFilter></ServiceFilter>
      <ServiceList></ServiceList>
    </>
  )
}

export default App
