
import * as React from 'react';
import { TodoList } from './ToDoList';

import { TodoListProps } from './ToDoListProps';




export const ToDoListItem:React.FC<TodoListProps>=({todos,toggleTodo})=>{
    return(
<ul>
    {todos.map(todo=>{
        return <TodoList todo={todo} toggleTodo={toggleTodo}></TodoList>
    })}
</ul>

    )
}

