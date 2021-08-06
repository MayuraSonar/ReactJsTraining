import React, { useState } from 'react';
import { AddTask } from './AddTask';
import './App.css';
import { ToDoListItem } from './ToDoListItem';

//import { TodoList } from './TodoList';

import { Todo, ToggleToDo, AddToDo } from './types';

const Firtstodos:Array<Todo>=[
  {text:"Review C# exercise",complete:true},
  {text:"React Js Training",complete:false}
]
export const App:React.FC=()=>{
  // useState returns array,first element is the state variable 
  //and the second element is a function to update the value of the variable:
  const [todos,setTodos]=useState(Firtstodos); //settodos method to change our todos
  //The toggleTodo function will take a selected todo
  // and toggle the complete prop for that todo.
  const toggleTodo:ToggleToDo=toDoSelected=>{
   
   const newTodos=todos.map(todo=>{
    if(todo==toDoSelected)
    {
      return{
        ...todo,
        complete: !todo.complete
      };
    }
    return todo;
   });
   setTodos(newTodos);
  }
 
    const addTodo:AddToDo=newTodo=>{
     
    newTodo.trim()!=="" && 
    setTodos([...todos,{text:newTodo,complete:false}])
  }
  return(
 
 <React.Fragment>
 {/* <TodoList todo={todos[0]} toggleTodo={toggleTodo}></TodoList>
 <TodoList todo={todos[1]} toggleTodo={toggleTodo}></TodoList> */}
 <ToDoListItem todos={todos} toggleTodo={toggleTodo}></ToDoListItem>
<AddTask addTodo={addTodo}></AddTask>
 </React.Fragment>
  )
}