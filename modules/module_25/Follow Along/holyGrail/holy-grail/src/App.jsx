import { useState } from 'react'
import './App.css'
import article from './components/article'
import footer from './components/footer'
import header from './components/header'
import left from './components/left'
import right from './components/right'

function Data(props) {
  return (<div>
    Header: {props.data.header},
    Left: {props.data.left},
    Article: {props.data.article},
    Right: {props.data.right},
    Footer: {props.data.footer}
  </div>);
}

function App() {
  const [data, setData] = useState({header: 0, left: 0, article: 0, right: 0, footer: 0})

  function handle(section) {
    console.log('Pong', section);
    const value = data[section.name] + section.value;
    const object = {[section.name]:value};
    setData({...data, ...object});
  }

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
