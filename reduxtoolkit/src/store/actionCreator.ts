import { Todo } from "../ToDo";
import { CREATE_TODO, DELETE_TODO, EDIT_TODO, SELECT_TODO } from "./actionTypes";
import { v4 } from 'uuid'
export interface CreateTodoAction{
    type: typeof CREATE_TODO;
    payload:Todo;
}

export const createTodoActionCreator=({
    description}:
    {description:string}):CreateTodoAction=>{
        return{
            type:CREATE_TODO,
            payload:{
                id:v4(),
                description,
                isComplete:false
            }
        }
    }

    export interface EditTodoAction{
        type: typeof EDIT_TODO;
        payload:{id:string,description:string}
    }

    export const editToActionCreator=({
        id,description
    }:{
        id:string;
        description:string;
    }):EditTodoAction=>{
        return{
            type:EDIT_TODO,
            payload:{id,description}
        }
    }


    export interface DeleteTodoAction{
        type: typeof DELETE_TODO;
        payload:{id:string}
    }

    export const deleteTodoActionCreator=({
        id
    }:
    {
        id:string;
    
    }):DeleteTodoAction=>{
        return{
            type:DELETE_TODO,
            payload:{id}
        }
    }

export interface SelectTodoAction{
    type:typeof SELECT_TODO;
    payload:{id:string};

}

export const selectoDoActionCreator=({
    id
}:{
    id:string
}):SelectTodoAction=>{
    return{
        type:SELECT_TODO,
        payload:{id}
    }
}