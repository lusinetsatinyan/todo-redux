import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_SELECTED_TODO } from '../redux/todosReducer'

function TodoList () {

  const dispatch = useDispatch()

  const toggleList = (item) => {
    return () => {
      dispatch({type: SET_SELECTED_TODO, key: item })
    }
  }

  const todos = useSelector(state => state.todos) || {}

  return (
    <div className="dates">
      <p>Dates</p>
      <div>
        {Object.keys(todos).map((item, index) => {
          return (
            <div className="date-field" key={index}>
              <p>{item} ({todos[item].length})</p>
              <button onClick={toggleList(item)}> > </button>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default TodoList