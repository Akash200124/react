import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useSate  is a hook - it is responsible ot change the state 
  // counter = it is varaible and setCounter is a function that is used to update the variable counter 

  let [counter, setakcounter] = useState(15)

  // let counter = 5 ;
  const addValue = () => {
    // counter = counter +1 ;
    console.log("value added ", Math.random(), counter)

    if (counter < 20) {
      setakcounter(counter + 1)
    }

  }

  const removeValue = () => {
    console.log("value added ", Math.random(), counter)
    if (!counter == 0) {
      setakcounter(counter - 1)
    }
  }

  return (
    <>

      <h1>THis is a react </h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <br />
      <button onClick={removeValue}>remove value {counter} </button>
      <p> footer : {counter}</p>


    </>
  )
}

export default App
