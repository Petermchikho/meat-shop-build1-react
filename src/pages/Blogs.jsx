import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import CountNum from "./count"
export default function Pages(){
    const [things,setThing]=React.useState(["thing 1","thing 2"])
    const [countData,setCountData]=React.useState([
        {
            id:1,
            number:0
        },
        {
            id:2,
            number:0
        },
        {
            id:3,
            number:0
        },
    ])
    const [change,setChange]=React.useState({
        name:"peter",
        age:"21",
        male:true

    })
    function changeText(){
        setChange((prev)=>{
            return {
                ...prev,
                male:!prev.male
            }
        })
    }
    function addition(id){
        setCountData((prev)=>{
            return prev.map((item)=>{
                return item.id === id ?{...item,number:item.number+1} : item
            })
            
        })
    }
    function subtract(id){
        setCountData((prev)=>{
            return prev.map((item)=>{
                return item.id === id && item.number>0 ?{...item,number:item.number -1} : item
            })
            
        })
        
    }
    function add(){
        const thing =`thing ${things.length + 1}`
        setThing((prev)=>{
            return [...prev,thing]
        })
    }
    const elements=things.map((item)=>{
        return(<p>{item}</p>)
    })
    return(
        <div id="about">
        <HeroGeneral
             title="blogs"
        />
        <div>
            {elements}
            <button onClick={add}>add newthing</button>
            <div>
                {
                    countData.map((item)=>{
                        return(<CountNum key={item.id} id={item.id} number={item.number} onAdd={addition} onSubtract={subtract}/>)
                    })
                }
                
                
            </div>
            
            
             <h3> {change.name} is {change.age} and { change.male ? "male" : "not male"}</h3>
            <button onClick={changeText}>change</button>
        </div>
        
        </div>
    )
}