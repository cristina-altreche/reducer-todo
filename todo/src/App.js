import React, { useState, useReducer } from 'react';
import { initialState, reducer } from "./reducers/simpleReducer";

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './App.css';

function App() {
  const[value, setValue] =useState("")
  const [{todos}, dispatch] = useReducer(reducer, { todos: [initialState]})
  const editable = document.querySelectorAll('div[contentEditable')


  const handleChange = e => {
    setValue(e.target.textContent)
  }

  const handleSubmit = e => {
    const target = document.querySelector('#input');
    e.preventDefault()
    dispatch({ type: "ADD_TODO", payload: value})
    target.textContent = ""
  }

  const onComplete = id => {
    dispatch({
      type: "MARK_COMPLETE",
      payload: todos.map(todo => {
        if (todo.id === id) {
          if (todo.completed === false) {
            return { ...todo, completed: true };
          } else {
            return { ...todo, completed: false };
          }
        } else {
          return todo;
        }
      }),
    });
  };

  const clear = () => {
    dispatch({
      type: "CLEAR_COMPLETE",
      payload: todos.filter(todo => todo.completed !== true)
    })
  }
  return (
    <div className="App">
      <TodoForm 
        dispatch={dispatch}
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <TodoList todos={todos} onComplete={onComplete}/>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
