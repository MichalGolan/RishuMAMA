import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UsersList from './components/users.jsx';

function App() {
  return (
    <div className="App">
      <UsersList/>
    </div>
  )
}

export default App
