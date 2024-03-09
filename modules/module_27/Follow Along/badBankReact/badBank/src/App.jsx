import { useState } from 'react'
import './App.css'
import { ContextProvider } from './context'

function App() {
  

  return (
    <>
      <ContextProvider>
        <h1>Hello World!</h1>
      </ContextProvider>
    </>
  )
}

export default App
