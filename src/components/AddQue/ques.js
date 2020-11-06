import React from "react"
import "./style.css"

const Ques = () =>{
    
    const options = new Array(4)
    const questions = {
        "text":"",
        options
    }
    const addQues = (e) =>{
        //console.log(e.target.value)
        questions.text = e.target.value
    }
    const addNext = (e) =>{
        console.log(e.target.value)
        const tempArray = options
        tempArray[e.target.id] = e.target.value
        questions.options[e.target.id] = e.target.value
    }
    const newQue = () =>{

        document.getElementById("abc").value = ""
        for(let i=0; i<4; i++){
            document.getElementById(i).value = ""
        }
    }


    return(
        <div className="container">

        <input type="text" id="abc" onChange={(e)=>addQues(e)}></input>
        {
            [...Array(4)].map((val,index) => {
                return <input type="text" key ={index} id={index} onChange={(e)=>addNext(e)}></input>
                
            })
        }
        <button onClick={()=>console.log(questions)}>Submit</button>
        <button className="btn" onClick={()=>newQue()} >Add Next Question</button>
    </div>
    )
    
} 
export default Ques