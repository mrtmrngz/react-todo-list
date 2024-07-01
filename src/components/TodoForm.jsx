import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoForm = ({isEditForm, todo, onUpdate}) => {

  const [name, setName] = useState("")

  const {addTodo} = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!isEditForm) {
      const newTodoData = {
        id: Math.floor(Math.random() * 999999),
        name,
        completed: false
      }
      addTodo(newTodoData)
    }else {
      onUpdate(todo.id, name)
    }

    setName("")
  }

  return (
    <div className='todo-form-wrapper'>
      {!isEditForm ? (
        <form className="todo-form" onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Todo' value={name} onChange={(e) => setName(e.target.value)} />
        <button className='btn-green small-btn'>Add Todo</button>
      </form>
      ) : (
        <form className="todo-form" onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Todo' value={name} onChange={(e) => setName(e.target.value)} />
        <button className='btn-purple small-btn'>Update Todo</button>
      </form>
      )}
    </div>
  );
};

export default TodoForm;
