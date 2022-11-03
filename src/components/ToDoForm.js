import React from 'react'
import ToDoList from './ToDoList'

function ToDoForm({todos, setTodos}) {


  return (
    <div>
        <div>
        <ul >

                {todos.map((todo) => (
                    <ToDoList  
                    key={todo.id}
                    text={todo.text}
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    
                />

                ))}

           
        </ul>    

        </div>
    </div>



  )
}

export default ToDoForm