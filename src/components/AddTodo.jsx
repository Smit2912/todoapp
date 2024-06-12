import { useContext, useRef } from "react"
import { MdLibraryAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {

  const {addNewItem} = useContext(TodoItemsContext)

  const todoNameElement = useRef(0)
  const dueDateElement = useRef(0)

  const handleAddBtn = (event) => {
    event.preventDefault()
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
    addNewItem(todoName,dueDate)
  }

  return (
    <form className="container"  onSubmit={handleAddBtn}>

          <div className="row rowprop">
            <div className="col-6">
              <input type="text"  placeholder="Enter Todo Here" ref={todoNameElement}/>
            </div>
            <div className="col-4">
              <input type="date" ref={dueDateElement}/>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success btnprop">
                <MdLibraryAdd />
              </button>
            </div>
          </div>
    </form>
  )
}

export default AddTodo