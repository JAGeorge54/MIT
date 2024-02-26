import { useState } from 'react'
import './App.css'
import article from './components/article'
import footer from './components/footer'
import header from './components/header'
import left from './components/left'
import right from './components/right'

function App() {
  const [data, setData] = useState({header: 0, left: 0, article: 0, right: 0, footer: 0})

  return (
    <>
      <div className="grid">        
            <Header  handle={handle} data={data}/>
            <Left    handle={handle} data={data}/>
            <Article handle={handle} data={data}/>
            <Right   handle={handle} data={data}/>
            <Footer  handle={handle} data={data}/>
        </div>
    </>
  )
}

export default App
