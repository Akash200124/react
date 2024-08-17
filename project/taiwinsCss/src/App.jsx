import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      {/* <div className='bg-slate-900 grid place-content-center h-screen '  >
        <div className='text-white text-4xl m-6'>Test</div>
     </div> */}
      <div>
        <div className="p-6 max-w-sm mx-auto bg-black rounded-lg text-white shadow-lg flex items-center space-x-4">
          <div>
            <img className='h-12 w-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/800px-Physics_wallah_logo.jpg" alt="" srcset="" />
          </div>
          <div>
            <div className='text-xl font-medium '>
              Taiwind Css
              <p className='text-slate-500 text-base'>by akash </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black text-white flex justify-center flex-col max-w-xs mx-auto space-x-4 rounded-lg my-4 p-4 '>
        <div >
          <img className='h-40 w-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSViLObBeJmK4HpH6YQADCCbOZwsic42Btw&s" alt="" />
        </div>
        <div>
          <div className='text-xl font-bold'>Taiwind css</div>
          <p className='text-slate-400 text-base'>by Akash</p>
        </div>
      </div>

      <div>
        <button className='bg-sky-600 text-white text-base p-2 rounded-lg hover:bg-white hover:text-black border '>Buy now </button>

        <div className='text-center text-4xl my-4'>
          <p className='md:text-green-600 sm:text-red-600'> Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mt-3">
          <div className="max-w-sm  mx-auto bg-black text-white rounded-lg overflow-hidden md:max-w-2xl">
            <div className='md:flex'>
              <div><img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/25654907/pexels-photo-25654907/free-photo-of-smiling-man-holding-ropes-over-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" /> </div>
              <div className='p-8 text-left'>
                <div className="uppercase  text-sm text-indigo-500 font-semibold tracking-wide">An ausome card </div>
                <a  className ="block mt-1 text-lg  font-medium hover:text-blue-700" href="#">Lorem <span className='p-[2px] px-[14px]' >ipsum</span> dolor sit.</a>
                <p className='mt-2 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sit numquam distinctio excepturi commodi dolorem!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
