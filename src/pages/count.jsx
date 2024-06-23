import React from "react"

export default function CountNum(props){
    return(
        <div >
        <h3>{props.number}</h3>
        <button onClick={()=>props.onAdd(props.id)}> add</button>
        <button onClick={()=>props.onSubtract(props.id)}>minus</button>
        </div>
        
    )
}