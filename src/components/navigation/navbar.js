import React from "react"
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () =>{

    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/displayQues">View Quiz</Link>
            </div>
        </nav>
    )
    
}

export default Navbar