import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './assets/componentes/Cards'
import Video from './assets/componentes/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cards/>
    <Video/>
      

      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
