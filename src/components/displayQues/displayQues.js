import React,{useState, useEffect} from 'react'
import './style.css'

const DisplayQues = () =>{
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:2021/sendData",{
            headers: {
                "Authorization":"Bearer"
            }
        }).then(res=> res.json())
        .then(result=>{  
            setData(result)
        })
    }, [])
    return(
        <div  style={{border:"1px solid red", margin:"40px auto",padding:"8px"}}>
            {
                data.map( item  =>{
                    return (
                        <div className="disQue">
                        <h3>{item.text}</h3>
                        <br></br>
                        <h4>{item.options[0]}</h4>
                        <h4>{item.options[1]}</h4>
                        <h4>{item.options[2]}</h4>
                        <h4>{item.options[3]}</h4>
                        <hr></hr>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayQues