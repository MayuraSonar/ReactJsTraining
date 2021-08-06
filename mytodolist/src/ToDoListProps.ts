import { Todo, ToggleToDo } from "./types";

export interface TodoListProps{
    todos:Array<Todo>
    toggleTodo:ToggleToDo;
}