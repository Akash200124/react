import React from 'react'

function Card({name,btntext ="visit me "}){

    // console.log("props: ",props)
    console.log("props: ",name)
    return (
        <div>
            <h2>This is a card named : {name}</h2>
            <button>{btntext || click }</button>
        </div>
    )
}
// function Card(props){

//     // console.log("props: ",props)
//     console.log("props: ",props.name)
//     return (
//         <div>Card</div>
//     )
// }

export default Card