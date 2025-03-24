import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {

  return (
    <>
        <Sidebar/>
        <Main/>
    </>
  )
}

export default App
