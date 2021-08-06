import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { AddTaskProps } from './AddTaskProps';
export const AddTask:React.FC<AddTaskProps>=({addTodo})=>{

    const [newTodo,setNewTodo]=useState("");
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value);
    }

    const submitButton=(e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addTodo(newTodo);
        // this code u can show later
        setNewTodo("");
    }
    return(
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={submitButton}>Add Task To Do</button>
        </form>
    )
}