import { createContext, useEffect, useState } from "react";


const TodoContext = createContext()

export const TodoProvider = ({children}) => {

  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const values = {
    todos,
    addTodo: (newTodoData) => {
      setTodos((prev) => [...prev, newTodoData])
    },
    updateTodo: (id, updatedName) => {
      const updatedTodos = todos.map(todo => {
        if(todo.id === id) {
          return {
            id: id,
            name: updatedName
          }
        }
        return todo
      })
      setTodos(updatedTodos)
    },
    deleteTodo: (id) => {
      const filteredTodos = todos.filter(todo => todo.id !== id)
      setTodos(filteredTodos)
    },
    clearAllTodos: () => {
      setTodos([])
    }
  }

  return (
    <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
  );
}


export default TodoContext