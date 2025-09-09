import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './utils/dashboard/Dashboard'
import DashboardFront from './utils/dashboard-frontEnd/DashboardFront'
//import Dashboard from './dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <>
      <Dashboard></Dashboard>
      {/* AABBCC */}
      {/* <DashboardFront></DashboardFront> */}
    </>
  )
}

export default App
