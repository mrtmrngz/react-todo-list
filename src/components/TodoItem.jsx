import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import TodoForm from "./TodoForm";
import TodoContext from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [isEdit, setIsEdit] = useState(false);

  const {updateTodo, deleteTodo} = useContext(TodoContext)

  const handleChange = (e) => {
    if (e.target.checked) {
      setIsCompleted((prev) => !prev);
    } else {
      setIsCompleted((prev) => !prev);
    }
  };

  const handleEditTask = (id, updatedName) => {
    setIsEdit(false);
    updateTodo(id, updatedName)
  };

  return (
    <>
      {isEdit ? (
        <TodoForm isEditForm={true} todo={todo} onUpdate={handleEditTask}  />
      ) : (
        <li className='todo-item'>
          <input
            onClick={handleChange}
            type='checkbox'
            className='todo-checkbox'
          />
          <span className={`todo-name ${isCompleted && "completed-todo"}`}>
            {todo.name}
          </span>
          <div className='todo-actions'>
            <button onClick={() => setIsEdit(true)}>
              <EditOutlined className='todo-action-icon' />
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <DeleteOutlined className='todo-action-icon' />
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;
