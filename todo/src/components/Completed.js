import React from 'react';

export function Completed({todo, dispatch}) {
  const toggleCompleted = () => {
    dispatch({
    type: 'ToggleCompleted',
    payload: todo.id
    });
  };

  return (
    <div onClick={toggleCompleted} className={`todo${todo.completed ? "completed" : ""}`} style={{ textDecoration: todo.completed ? "line-through" : ""}}>
      <h3>Task: {todo.item}</h3>
    </div>
  )
}