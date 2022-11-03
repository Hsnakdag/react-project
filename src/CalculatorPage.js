
import React from "react";
import { Link } from "react-router-dom";
import Calculator from "./components/Calculator";


const CalculatorPage = () => {

   //const[conclusion, setConclusion] = useState(1);
    


    
    return (
       <div className='back-ground'>
        <text>helooooooo</text>
        <Calculator />
        <section>
                         
                       
                       
                        <Link to="/MainPage" className="btn">Main Page</Link>
                        <Link to="/" className="btn">Sign out</Link>

        </section>
        </div>
    )
}



export default CalculatorPage;