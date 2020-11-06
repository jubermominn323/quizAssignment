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
    const addOption = (e) =>{
        //console.log(e.target.value)
        const tempArray = options
        tempArray[e.target.id] = e.target.value
        questions.options[e.target.id] = e.target.value
    }
    const newQue = () =>{
        // var data = {...questions}
        // console.log(data)
        document.getElementById("abc").value = ""
        for(let i=0; i<4; i++){
            document.getElementById(i).value = ""
        }
    }
    const addData = () =>{
        fetch("",{
            method: "post",
            body: JSON.stringify({
                questions
            })
        }, console.log("success"))
    }


    return(
        <div className="container">

        <input type="text" id="abc" onChange={(e)=>addQues(e)} placeholder="Add question here" />
        {
            [...Array(4)].map((val,index) => {
                return (
                    <div className="options">
                    <input type="text" key ={index} id={index} onChange={(e)=>addOption(e)} placeholder="Add option here" />
                    </div>
                    )
            })
        }
        <button className="btn"  onClick={()=>addData()}>Submit</button>
        <button className="btn" style={{float:"right"}} onClick={()=>newQue()} >Add Next Question</button>
    </div>
    )
    
} 
export default Ques