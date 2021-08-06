import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodoActionCreator, deleteTodoActionCreator, createTodoActionCreator,selectTodoActionCreator} from "./react-toolkit";


import { State } from "./ToDo";

function App() {

  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos);
  const selectedTodoId = useSelector((state: State) => state.selectedTodo);
  const editedCount = useSelector((state: State) => state.counter);
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const [editTodoInput, setEditTodoInput] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const editInput = useRef<HTMLInputElement>(null);
  const selectedTodo =
    (selectedTodoId && todos.find(todo => todo.id === selectedTodoId)) || null;

    const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setNewTodoInput(e.target.value);
    };

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditTodoInput(e.target.value);
  };

  const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newTodoInput.length) return;

    dispatch(createTodoActionCreator({ description: newTodoInput }));
    setNewTodoInput("");
  };

  const handleSelectTodo = (todoId: string) => (): void => {
    console.log("Display");
    dispatch(selectTodoActionCreator({ id: todoId }));
  };

  const handleEdit = (): void => {
    if (!selectedTodo) return;

    setEditTodoInput(selectedTodo.description);
    setIsEditMode(true);
  };

  useEffect(() => {
    if (isEditMode) {
      editInput?.current?.focus();
    }
  }, [isEditMode]);
 

const handleUpdate = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();

  if (!editTodoInput.length || !selectedTodoId) {
    handleCancelUpdate();
    return;
  }

  dispatch(
    editTodoActionCreator({ id: selectedTodoId, desc: editTodoInput })
  );
  setIsEditMode(false);
  setEditTodoInput("");
};const handleCancelUpdate = (
  e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
): void => {
  e?.preventDefault();
  setIsEditMode(false);
  setEditTodoInput("");
};

const handleToggle = (): void => {
  if (!selectedTodoId || !selectedTodo) return;

}

const handleDelete = (): void => {
  if (!selectedTodoId) return;

  dispatch(deleteTodoActionCreator({ id: selectedTodoId }));
};

return (
  <div>
    <div>Todos Updated Count: {editedCount}</div>
    <div>
      <h1>Todo: Redux and Redux Tool Kit Demo</h1>
      <form onSubmit={handleCreateNewTodo}>
        <label htmlFor="new-todo">Add new:</label>
        <input
          onChange={handleNewInputChange}
          id="new-todo"
          value={newTodoInput}
        />
        <button type="submit">Create</button>
      </form>
    </div>
    <div>
      <ul>
        <h2>My Todos:</h2>
        {todos.map((todo, i) => (
          <li
            className={`${todo.isComplete ? "done" : ""} ${
              todo.id === selectedTodoId ? "active" : ""
            }`}
            key={todo.id}
            onClick={handleSelectTodo(todo.id)}
          >
            <span className="list-number">{i + 1})</span> {todo.description}
          </li>
        ))}
      </ul>
      <div>
        <h2>Selected Todo:</h2>
        {selectedTodo === null ? (
          <span>No Todo Selected</span>
        ) : !isEditMode ? (
          <>
            <span
              className={`todo-desc ${
                selectedTodo?.isComplete ? "done" : ""
              }`}
            >
              {selectedTodo.description}
            </span>
            <div className="todo-actions">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate}>
            <label htmlFor="edit-todo">Edit:</label>
            <input
              ref={editInput}
              onChange={handleEditInputChange}
              value={editTodoInput}
            />
            <button type="submit">Update</button>
            <button onClick={handleCancelUpdate}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  </div>
);
        }
export default App