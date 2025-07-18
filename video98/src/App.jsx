import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

   <nav className="bg-purple-600 text-white flex md:justify-between flex-col md:flex-row items-center">
    <div className="logo mx-auto md:mx-0">
      Prince
    </div>
    <ul className='flex space-x-3 mx-auto md:mx-0'>

    <li>About </li>
    <li>Contact us</li>

    </ul>
   </nav>
      
      <main>
        <div className="cont bg-red-600 sm:bg-purple-500 md:bg-sky-400">
          I am red
        </div>
      </main>
    </>
  )
}

export default App
