import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className='todo-list-wrapper'>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <h1 className='empty-list-warning'>Empty List</h1>
      )}
    </div>
  );
};

export default TodoList;
