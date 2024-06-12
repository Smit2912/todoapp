import React, { useContext } from 'react'
import styles from './WelcomeMsg.module.css'
import { TodoItemsContext } from '../store/todo-items-store'

function WelcomeMsg() {

  const contextObj = useContext(TodoItemsContext)
  const todoItems = contextObj.todoItems

  return (
    todoItems.length === 0 && <p className={styles.welcome}>No Tasks to do. <br />Enjoy Your Day!</p>
  )
}

export default WelcomeMsg