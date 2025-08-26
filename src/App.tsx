import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
