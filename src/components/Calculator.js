

import React, { useState } from "react";



import "../index.css"
import CalculatorConclusion from "./CalculatorConclusion";

const Calculator = () => {
      
     const [conclusion,setConclusion] = useState(); 
       const[numbArr, setNumbArr] = useState([]); 
     
    function addTo(){
      
              const numb1 = document.getElementById('numb1').value
              const numb2 = document.getElementById('numb2').value
              setNumbArr([...numbArr,{number : conclusion}])
              return (setConclusion(parseInt(numb1,10)+ parseInt(numb2,10)))

                    
       }
       function minusTo(){
              const numb1 = document.getElementById('numb1').value
              const numb2 = document.getElementById('numb2').value
              setNumbArr([...numbArr,{number : conclusion}])
              return setConclusion(parseInt(numb1,10) - parseInt(numb2,10));
       }
       function dividedTo(){
              const numb1 = document.getElementById('numb1').value
              const numb2 = document.getElementById('numb2').value
              
              if(numb1 === 0){
                     return alert("number1 can not 0 value")
              }else{
                     setNumbArr([...numbArr,{number : conclusion}])
                     return setConclusion(parseInt(numb1,10) / parseInt(numb2,10))
              }

       }
       function multiplyTo(){
              const numb1 = document.getElementById('numb1').value
              const numb2 = document.getElementById('numb2').value
              setNumbArr([...numbArr,{number : conclusion}])
              return setConclusion(parseInt(numb1,10) * parseInt(numb2,10));
       }
      
 return (
            <div>Calculator
            <form className="form-horizontal">
           
           <input  id="numb1" type="number" className="form-control" placeholder="Number1"/>
           <input  id="numb2" type ="number" className="form-control" placeholder="Number2"/>
          
           <div className = "dropdown">
             <span>
                    Select Operator
             </span>
             
          <CalculatorConclusion
              conclusion={conclusion}
              
          />
            <div className="dropdown-content">
                    <button type ="button" onClick={addTo} className="btn">+</button>
                    <button type="button" onClick={minusTo} className="btn" >-</button>
                    <button type="button" onClick={multiplyTo} className="btn" >*</button>
                    <button type="button" onClick={dividedTo} className="btn" >/</button>
                    
                    <input type={"reset"} onClick="checkForm();" value="Clear"/>
          </div>
            
           </div>
           
         
    </form>
     
     
     </div>
     );
     
}
export default Calculator;