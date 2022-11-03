import React from 'react'


function ToDoList({text, todos, setTodos, todo}) {

        const deleteHandler = () =>{
                setTodos(todos.filter((elements) => elements.id !== todo.id)) //if choosing id == todo delete this 
               
}
       
        const completeHandler = () =>{

                setTodos(todos.map((item) => {
                        if(item.id === todo.id){
                                return {completed: !item.completed
                                }}
                                return item;
                                
                }))
              
        }



//map fuction
  return (
       
      
       
    
       
    <div>
        
       
       <h3><li className='todo-item'>{text}</li><button className="complete-btn " onClick={completeHandler}>Done</button>
        <button className='trash-btn' onClick={deleteHandler}>Delete</button>
        </h3>
    </div>       
    
    
  )
}

export default ToDoList