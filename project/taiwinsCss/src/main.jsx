import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Webpage from './Webpage.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Tools from './tools.jsx'
import CurrencyCoverter from './components/CurrencyConverter.jsx'
import Layout from './components/Layout.jsx'
import PasswordCreation from './components/PasswordCreation.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    
    <Route>
        <Route path='/' element={<Webpage/>}/>
        <Route path='curr' element={<CurrencyCoverter/>}/>
        <Route path='pass' element={<PasswordCreation/>}/>
      </Route>
    

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Tools/> */}
    {/* <App /> */}
    <RouterProvider router={route} />
    
  </StrictMode>,
)
