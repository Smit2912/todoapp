import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import WelcomeMsg from './components/WelcomeMsg'
import './App.css'
import { useReducer, useState } from 'react'
import TodoItemsContextProvider, { TodoItemsContext } from './store/todo-items-store'

function App() {

  // const [todoItems, setTodoItems] = useState([])

  // const handleNewItem = (itemName, itemDate) => {
  //   const newItems = [...todoItems, {name:itemName ,dueDate:itemDate}]
  //   setTodoItems(newItems)
  // }

    //  const handleNewItem = (itemName, itemDate) => {
    //   setTodoItems(currValue => {
    //     const newItems = [...todoItems, {name:itemName ,dueDate:itemDate}]
    //     return newItems
    //   })  
    // }

  // Optimized
  // const addNewItem = (itemName, itemDate) => {
  //   setTodoItems((currValue) => [ //We will get latest value, if updated
  //     ...currValue, {name:itemName ,dueDate:itemDate}
  //   ])
  // }

  // const deleteItem = (todoItemName) => {
  //   const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
  //   setTodoItems(newTodoItems)
  // }

  // const dummy = [{
  //   name:"Buy Milk",
  //   dueDate: "29/12/2003"
  // }]

  return (
    <TodoItemsContextProvider>
      <center className='todo-container'>
        <AppName/>
        <AddTodo/>
        <WelcomeMsg/>
        <TodoItems/>
      </center>
    </TodoItemsContextProvider>
  )
}

export default App
