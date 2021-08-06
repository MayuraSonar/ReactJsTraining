import { v4 } from "uuid";
import { CREATE_TODO, DELETE_TODO, EDIT_TODO, SELECT_TODO } from "./actionTypes";
import thunk from "redux-thunk";
import { Todo } from "../ToDo";
import { CreateTodoAction, DeleteTodoAction, EditTodoAction, SelectTodoAction } from "./actionCreator";
import { applyMiddleware, combineReducers, createStore } from "redux";
const todosInitialState: Todo[] = [
    {
      id: v4(),
      description: "Learn React",
      isComplete: true
    },
    {
      id: v4(),
      description: "Learn Redux",
      isComplete: true
    },
    {
      id: v4(),
      description: "Learn Redux-ToolKit",
      isComplete: false
    }
  ];
  type TodoActionTypes =
  | CreateTodoAction
  | EditTodoAction
    | DeleteTodoAction;
const todosReducer = (
  state: Todo[] = todosInitialState,
  action: TodoActionTypes
) => {
  switch (action.type) {
    case CREATE_TODO: {
      const { payload } = action;
      return [...state, payload];
    }
    case EDIT_TODO: {
      const { payload } = action;
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, desc: payload.description } : todo
      );
    }
    
    case DELETE_TODO: {
      const { payload } = action;
      return state.filter(todo => todo.id !== payload.id);
    }
    default: {
      return state;
    }
  }
};

type SelectedTodoActionTypes = SelectTodoAction;
const selectedTodoReducer = (
  state: string | null = null,
  action: SelectedTodoActionTypes
) => {
  switch (action.type) {
    case SELECT_TODO: {
      const { payload } = action;
      return payload.id;
    }
    default: {
      return state;
    }
  }
};

const counterReducer = (state: number = 0, action: TodoActionTypes) => {
  switch (action.type) {
    case CREATE_TODO: {
      return state + 1;
    }
    case EDIT_TODO: {
      return state + 1;
    }
   
    case DELETE_TODO: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  todos: todosReducer,
  selectedTodo: selectedTodoReducer,
  counter: counterReducer
});

// Store
export default createStore(
    reducers,applyMiddleware(thunk)
  );
  