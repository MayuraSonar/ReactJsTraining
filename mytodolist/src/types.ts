export type Todo={
    text:string,
    complete:boolean
    };

    export type ToggleToDo= (toDoSelected: Todo)=>void;
  export type AddToDo =(newTodo: string)=>void;