import react from 'react'
import { useBattery } from 'react-use';

import './App.css'

function App() {

  const battery =useBattery();



  const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

  console.log("battery details",battery)
  if (!isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>Not supported</span>
      </div>
    );
  }

  return (
    <>
       <div className=''>
      <h1 >Battey details</h1>
      <div>
      {/* Display Battery Charge Percentage */}
      <strong className='mt-10'>Charge level</strong>:&nbsp;&nbsp;{" "}
      <span className='text-3xl mt-10'>{(level * 100).toFixed(0)}%</span> <br />
      {/* Display Whether Device is charging or not */}
      <strong>Charging</strong>:&nbsp;&nbsp;{" "}
      <span>{charging ? "Yes" : "No"}</span> <br />
      {/* Display Device Charging time */}
      <strong>Charging time</strong>:&nbsp;&nbsp;
      <span>{chargingTime ? chargingTime : "Finished"}</span> <br />
      {/* Display Device Discharging time */}
      <strong>Discharging time</strong>:&nbsp;&nbsp;{" "}
      <span>{dischargingTime}</span>
      
    </div>
    </div>
    </>
  )
}

export default App
