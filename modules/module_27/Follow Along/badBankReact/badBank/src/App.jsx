import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
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
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/createaccount' element={ <CreateAccount/> } />
      </Routes>
    </>
  )
}

export default App
