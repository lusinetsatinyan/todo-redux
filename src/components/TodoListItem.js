import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { DELETE_ITEM, SAVE_EDITED_INPUT, SET_SELECTED_TODO } from '../redux/todosReducer'


function TodoListItem () {

  const [currentTodo, setCurrentTodo] = useState({})
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.selectedDate);
  const selectedItem = useSelector(state => state.todos[selectedDate]);


  function saveEditedInput () {
    dispatch({type: SAVE_EDITED_INPUT, id: currentTodo.id, key: currentTodo.dateTime, label: currentTodo.label})
    setCurrentTodo({});
  }

  function goBack () {
    dispatch({type: SET_SELECTED_TODO, key: null})
  }

  function deleteItem (id, dateTime) {
    return () => {
      dispatch({type: DELETE_ITEM, id: id, key: dateTime})

    }
  }

  function showEditItem (todo) {
    return () => {
      const selectedEditItem = selectedItem.filter((item) => {
        return todo.id === item.id
      })
      setCurrentTodo({ ...selectedEditItem[0] })
    }
  }

  function handleInputChange (e) {
    setCurrentTodo({...currentTodo, label: e.target.value})
  }



  return (
    <div>
      <div className="title-2">
        <button onClick={goBack}>{"< Go back "}</button>
        <h2>{selectedDate} ({selectedItem.length})</h2>
      </div>
      <div className="container">
         <div className="input-list">
          {selectedItem.map((item) => {
            return (
              <div className="input-list-2" key={item.id}>
                {item.id !== currentTodo.id  &&
                  <>
                    <div>
                      <input type="checkbox"/>
                      <span className="strikethrough">{item.label}</span>
                    </div>
                    <div className="buttons">
                      <button className="btn-1" onClick={showEditItem(item)}>edit</button>
                      <button className="btn-2" onClick={deleteItem(item.id, item.dateTime)}>delete</button>
                    </div>
                  </>
                }
                {item.id === currentTodo.id  && <div>
                  <div className="edit-input">
                    <input
                      type="text"
                      placeholder="Edit Todo"
                      value={currentTodo.label}
                      onChange={handleInputChange}
                    />
                    <button className="btn-1" onClick={saveEditedInput}>save</button>
                    <button className="btn-3" onClick={() => setCurrentTodo({})}>cancel</button>
                  </div>
                </div> }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TodoListItem