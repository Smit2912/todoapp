import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext =  createContext([])

const todoItemsReducer = (currTodoItem, action) => {
    let newTodoItems = currTodoItem
    if(action.type === 'NEW_ITEM'){
      newTodoItems = [
        ...currTodoItem,
        {
          name:action.payload.itemName, 
          dueDate:action.payload.itemDate
        }
      ]
    }else if(action.type === 'DELETE_ITEM'){
      newTodoItems = currTodoItem.filter(item => item.name !== action.payload.todoItemName)
    }
    return newTodoItems
  }

const TodoItemsContextProvider = ({children}) => {

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (itemName, itemDate) => {
    const newTodoItems = {
      type: "NEW_ITEM",
      payload:{
        itemName,
        itemDate
      }
    }
    dispatchTodoItems(newTodoItems)
  }

  const deleteItem = (todoItemName) => {
    const deleteItems = {
      type: "DELETE_ITEM",
      payload:{
        todoItemName
      }
    }
    dispatchTodoItems(deleteItems)
  }

  return <TodoItemsContext.Provider value={{todoItems, addNewItem, deleteItem}}>
    {children}
  </TodoItemsContext.Provider>
}

export default TodoItemsContextProvider