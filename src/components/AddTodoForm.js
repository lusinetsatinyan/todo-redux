import React from 'react';
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/todosReducer'




function AddTodoForm () {

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [newTask, setNewTask] = useState("");

  const add = () => {
    const date = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
    const newData = { id: ~~(Math.random() * 10000), label: newTask, dateTime: date};
    dispatch({ type: ADD, key: date, value: newData });
    setNewTask("")
  }

  const updateInput = (e) => {
    setNewTask(e.target.value)
  }
    return (
      <div className="form">
        <p>New Task</p>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="first-input"
              type="text"
              placeholder="type here"
              value={newTask}
              onChange={updateInput}
            />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            <button className="add-button" onClick={add}>Add</button>
          </form>
        </div>
      </div>
    )
}

export default AddTodoForm;