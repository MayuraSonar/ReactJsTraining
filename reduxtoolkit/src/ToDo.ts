export interface Todo
{
    id:string;
    description:string;
    isComplete:boolean;
}

export interface State{
    todos:Todo[];
    selectedTodo:string| null|undefined;
    counter:number;
}