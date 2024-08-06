import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);

  const [password, setpassword] = useState("");

  //userRef hook 
  const passwordRef = useRef(null);

  // usercallback memorise the function  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberAllow, charAllow, setpassword])

  // hook that useEffect page load then it call and change in the variable 
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])

  // useRef hook 
  const copyPasswordTOClip = useCallback(()=>{
    // the useref is use to give the some feature that UI  on click select the value and also we can define the range 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 my-10 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white mb-6 mt-6 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordTOClip}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label >Length:{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow}
              onChange={() => {
                setnumberAllow((prev) => !prev)
              }}
            />
            <label htmlFor='numberinput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllow}
              id='characterInput'
              onChange={() => {
                setcharAllow((prev) => !prev)
              }}
            />
             <label htmlFor='characterInput'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
