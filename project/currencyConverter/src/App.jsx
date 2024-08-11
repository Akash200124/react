import './App.css'
import useCurrentInfo from './usecurrencyinfo'
import InputBox from "./component/InputBox.jsx"
import { useState } from 'react';


function App() {

    const [amount ,setAmount] = useState("")
    const [from,setFrom] = useState('usd');
    const[to,setTo] = useState('inr');
    const[convertedAmount,setConvertedAmout] = useState("");


    const curencyInfo = useCurrentInfo(from);
    // console.log(curencyInfo)
    const option =  Object.keys(curencyInfo);
    // console.log(option)

    const swap =()=>{
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedAmout(amount)    
    }

    console.log(to)
    console.log(from)
    
    const convert= ()=>{
        setConvertedAmout(amount * curencyInfo[to.toUpperCase()])
        // console.log(curencyInfo)    
    }

    return (
     <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:`url('https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
     >
        <div className='w-full'>
        <div className=' max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form 
          onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}
          >
            <div className='w-full wb-1'> 
                <InputBox
                 label="From"
                 amount={amount}
                 currencyOption={option}
                 onCurrencyChange={(currency)=> setFrom(currency)}
                 selectCurrency={from}     
                 onAmountChange={(amount)=>setAmount(amount)}
                 
                  />
            </div>
            <div className='relative w-full h-0.5'>
                <button 
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >
                    Swap
                </button>
            </div>
            
            <div className='w-full mt-1  mb-4'>
                <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={option}
                selectCurrency={to}    
                onCurrencyChange={(currency)=> setTo(currency)}
                amountDisble
                
                />
                
            </div>
            <button type='submit'
            className='w-full bg-blue-600 text-white p-4 py-3 rounded-lg' 
             >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
        </div>

     </div>
    )
}



export default App