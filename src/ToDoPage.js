import React from "react";
import ToDo from "./components/ToDo";
import {useState} from 'react';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";




const ToDoPage = () =>{

    const [inputText, setInputText] = useState(" ");
    const [todos, setTodos] = useState([]);
    
    

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
  }
      const toDoList = []
   
      const submitTodoHandler = (e) =>{
          e.preventDefault();
          setTodos([...todos, {text: inputText, completed: false, id: Math.random()}]);
         setInputText(" ")
   }

return(
    <div  className='back-ground'>

        <h1>To Do List </h1>
        <br></br>
       
        <header>

        <label>To Do List: </label>
        
        <input value={inputText} type="text" placeholder='Add task...' onChange={inputTextHandler}></input>
        <button type="submit" className="btn" onClick={submitTodoHandler}>Add
      </button>
     
     
     
        
      
            <ToDo //fazladan done delete button 
            inputText={inputText} 
            setInputText={setInputText}
            todos = {todos}
            setTodos={setTodos}
            />
            <ToDoForm
            todos={todos}
            setTodos={setTodos}
            />
            <ToDoList text={inputText} todos={todos}/>
            
        </header>
       
    </div>

);
}
export default ToDoPage;