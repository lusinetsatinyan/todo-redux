
import React from 'react'
import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'
import TodoListItem from './components/TodoListItem'

function App () {

  const selectedDate = useSelector(state => state.selectedDate)

  return (
    <div className="App">

      {!selectedDate ?
        <div>
          <h1 className="title">To Do List </h1>
          <div>
            <AddTodoForm/>
            <TodoList/>
          </div>
        </div> :
        <TodoListItem/>}
    </div>
  )
};

export default App
