import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>custom App| akash</h1>
        </div>
    )
}
// const reactElement = {
//     type: "a",
//     props:{
//        href:'https://google.com',
//        target:"_blank"
//     },
//     children:"click me to visit google"   
//    }

   const anotherhrefElement = (
    <a href="https://google.com" target='_blank'>Visite google  </a>
   )

   const anotheruser = "akashuser";
   const reactElement = React.createElement(
    'a',
    {href:"https:mobiheal.in",target:"_blank"},
    'click me to vist mobiheal',
    anotheruser
   )

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // MyApp()
    // reactElement
    // anotherhrefElement
    reactElement
)
