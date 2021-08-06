import React from 'react';
import { TodoListItemProps } from './TodoListItemProps';
import './ToDoList.css';

export const TodoList: React.FC<TodoListItemProps>=({
    todo,
    toggleTodo
})=>{
    return(
    <li>
        <label className={todo.complete ? "complete" :undefined}>
            <input type="checkbox" checked={todo.complete}onChange={()=>toggleTodo(todo)}></input>
            {todo.text}
        </label>
    </li>
    );
}