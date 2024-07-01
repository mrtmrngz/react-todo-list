import './App.css'
import ClearAll from './components/ClearAll'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='App'>
      <h1 className='web-header'>Todo List</h1>
      <TodoForm />
      <ClearAll />
      <TodoList />
    </div>
  )
}

export default App