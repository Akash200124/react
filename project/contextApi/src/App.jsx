import { useState } from 'react'

import './App.css'
import UserConstextProver from './contex/UserContexProver'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserConstextProver>
     <h1>React with the context api </h1>
     <Login/>
     <Profile/>
    </UserConstextProver>
  )
}

export default App
