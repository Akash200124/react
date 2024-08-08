import { useState, useEffect, useRef } from 'react'

import './App.css'
import UseCurrentInfo from './usecurrencyinfo'

function App() {

  const shoot = (a, b) => {
    alert(`shoot ${a} + ${b.type}`)
  }

  const [myCar, setmyCar] = useState("bmw");
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  const handleChange1 = (event) => {
    setmyCar(event.target.value)
  }

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  // usestate hook 
    const [count1 , setcount1] = useState(0);
    const [calculation,setcalculation] = useState(0);

    useEffect(()=>{
      setcalculation(()=>count1 *2)
    },[count1])

    // it will run the function when page load and if the dependency variable changes 

    const [inputvalue,setinputvalue] = useState("");
    const countr = useRef(0)
    useEffect(()=>{
      countr.current = countr.current + 1
    })

    // useref hook 
    // it is use to store the previous value 
    // it is use to focuse the input fields 
    // it is used to maintain the count and does not change the value when render 

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

   useEffect(() => {
    previousInputValue.current = inputValue;
    }, [inputValue]);

    // useCallback hook 
    //useCallback Hook only runs when one of its dependencies update
    //

  return (
    <>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>


      <input type="text" 
      value={inputvalue}
      onChange={(e)=>setinputvalue(e.target.value)}
       />
      <h1> Render count : {countr.current}</h1>


      <p>Count: {count1}</p>
      <button onClick={() => setcount1((c) => c + 1)}>+Add</button>
      <p>Calculation: {calculation}</p>

      <h1>I've rendered {count} times!</h1>;
      <h1 className='text-3xl bg-orange-500' >Currency app with Akash</h1>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 border border-blue-500 hover:border-transparent rounded' onMouseOver={(event) => { shoot("rahul", event) }}>shoot me</button>

      <form>
        <label>Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button>{name}</button>
        <textarea className='bg-back-500' onChange={handleChange} placeholder={textarea} ></textarea>


        <select value={myCar} onChange={handleChange1}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>


      </form>
      <h1 style={{ color: "red", backgroundColor: "black" }}>Hello Style!</h1>
      <p style={myStyle}>Add a little style!</p>

    </>



  )
}

export default App
