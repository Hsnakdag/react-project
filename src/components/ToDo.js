import '../App.css'
import React from "react";
import {Link} from 'react-router-dom'


function ToDo({}){


    return(
        <div>
                 <form>
            <div>
                <Link to="/CalculatorPage" className='btn'>Calculator</Link>
            </div>
           
            <div>
                <Link to="/" className='btn'>Sign out</Link>
            </div>
         
        </form>
        </div>

)   
}
export default ToDo;