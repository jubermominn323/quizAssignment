import React,{useState} from "react"
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './style.css'

const Navbar = () =>{
    // const [data, setData] = useState([])
    // const viewData = () =>{
    //     fetch("",{
    //         headers:{
    //             "Authorization": "Bearer"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then( result =>{
    //         setData(result)
    //     })
    // }
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/displayQues">View Quiz</Link>
            </div>
        </nav>
    )
    
}

export default Navbar