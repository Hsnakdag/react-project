import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const LoginForm = () => {
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
    const login = [
       {userName:"hasan", password:"1234"},
       
        {userName:"ali", password:"12345"}
  ]
   const checkValidate = (e) =>{
    e.preventDefault();

        login.map((check) => {
          if(userName === check.userName && password === check.password){
            
            navigate("/mainPage");
            return  alert("Correct UserName and Password Welcomeee")
            
          }
         else if(userName === check.userName && password !== check.password){
    
            return alert("Wrong password try again..")}
   
   else if(userName !== check.userName && password !== check.password){
          return alert("wrong pass and name")}
  })
   }
  return (
   
      <div>
         <h3>Login</h3>
       
        
        <form id = "form_id" onSubmit={checkValidate}>
           
            <div>
            <label>User Name : </label>
            <input type = "text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
            <label>Password : </label>
            <input type = "password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
            
              <button type="submit" onClick = {checkValidate}> Login </button>
             
            </div>
        </form>
        
        
        


      </div>
      
      );
      
}
export default LoginForm;