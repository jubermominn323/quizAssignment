import React from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "../navigation/navbar";
import "./style.css"

const Ques = () =>{

    const options = new Array(4)
    var data = []
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
        if(e.target.value !== ""){
            questions.options[e.target.id] = e.target.value 
        }
        // questions.options[e.target.id] = e.target.value
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
        
        data.push(questions)
        //console.log(questions)
        if(questions.text.length !== 0){
            fetch("http://localhost:2021/getQue",{
            method: "post",
            headers : {
                "Content-Type":"application/json",
                'Accept': 'application/json'
              },
            body: JSON.stringify({
                questions:data
            })

        }, console.log(questions))
        }
        else{
            toast.error("Fill all the inputs")
        }
        

    }


    return(
        <div className="bar">
            <Navbar />
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
        <ToastContainer />
        <button className="btn"  onClick={()=>addData()}>Submit</button>
        <button className="btn" style={{float:"right"}} onClick={()=>newQue()} >Add Next Question</button>
        
    </div>
    </div>
    )
    
} 
export default Ques