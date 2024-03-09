import { useState } from 'react'
import './App.css'
import { ContextProvider } from './context'
import Home from './components/home'
import AllData from './components/alldata'
import CreateAccount from './components/createaccount'
import NavBar from './components/navbar'

function App() {
  

  return (
    <>
      <NavBar/>
      <Home/>
      <AllData/>
      <CreateAccount/>
    </>
  )
}

export default App
