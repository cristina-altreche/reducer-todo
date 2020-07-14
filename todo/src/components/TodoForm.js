import React, { useState } from "react";

export const TodoForm = ({ dispatch }) => {
  const [items, setItems] = useState("");

  const handleChanges = (e) => {
    setItems(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "AddTodo",
      payload: [items],
    });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({
      type: "ClearCompleted",
    });
  };

  return (
    <div className="form-container">
      <div className="banner"><h4>Today's Todo</h4></div>
      <form onSubmit={submitForm}>
        <input
          name="todo"
          onChange={handleChanges}
          value={items}
          id={Date.now()}
          placeholder="Enter Task"
        />
        <div className="buttons">
        <button>Add</button>
        <button onClick={clearCompleted}>Clear</button>
        </div>
      </form>
    </div>
  );
};
