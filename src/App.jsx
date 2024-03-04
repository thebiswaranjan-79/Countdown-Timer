import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Countdown from './components/Countdown'

function App() {
  

  return (
    <div className='container'>
        <ToastContainer />
        <Countdown/>
    </div>
  )
}

export default App
