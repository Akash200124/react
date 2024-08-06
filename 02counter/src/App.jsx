import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {

  // useSate  is a hook - it is responsible ot change the state 
  // counter = it is varaible and setCounter is a function that is used to update the variable counter 

  const [counter, setakcounter] = useState(15)

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
      setakcounter(prevcount => prevcount - 1 )
      setakcounter(prevcount => prevcount - 1 )
      setakcounter(prevcount => prevcount - 1 )
      setakcounter(counter - 1)
      // setakcounter(counter - 1) // it is functionality of the usestate return a callback url 
       // all the update come in a bach and send to virtual dom 
      
    }
  }

  let myObj = {
    username: "akash",
    age: 21
  }
  let array = [2, 23, 4, 4, 4, 5, 4]

  return (
    <>

      <h1>THis is a react </h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <br />
      <button onClick={removeValue}>remove value {counter} </button>
      <p> footer : {counter}</p>

      <h1 className='bg-green-400 text-black p-4 ' >Tailwind test </h1>

      <Card name="akash" btntext = "click on name" someObject={myObj} myarray={array} />
      <Card name= "rahul" btntext = "click on rahul" />
      <Card name= "rahul"  />

    </>
  )
}

export default App
