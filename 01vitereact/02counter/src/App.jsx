import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter, setcounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    // console.log("clicked", Math.random());
    // counter = counter + 1
     setcounter(counter + 1)
  }

  const removeValue = () => {
    // console.log("clicked", Math.random());
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>

      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
