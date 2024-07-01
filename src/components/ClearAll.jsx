import { useContext } from "react"
import TodoContext from "../context/TodoContext"

const ClearAll = () => {

  const {clearAllTodos} = useContext(TodoContext)

  return (
    <div className="clear-all-btn-wrapper">
      <button onClick={clearAllTodos} className="btn-red small-btn">Delete All</button>
    </div>
  )
}

export default ClearAll