import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuids4} from 'uuid';
uuids4();

export const TodoWrapper=() => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuids4(), task:todo, completed:false, isEditing:false}])
    console.log(todos)
  
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index)=> (<Todo task={todo} key={index}/>))}
     
      
    </div>
  )
  //Toodo App

}

export default TodoWrapper
