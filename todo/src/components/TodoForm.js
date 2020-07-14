import React, {useState} from 'react';

export const TodoForm = ({dispatch}) => {
  const [items, setItems] = useState('');

  const handleChanges = e => {
    setItems(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: 'AddTodo',
      payload: [items]
    });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: 'ClearCompleted'
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Todo</label>
        <input name='todo' onChange={handleChanges} value={items} id={Date.now()} />
        <button>Add Item</button>
        <button onClick={clearCompleted}>Clear Item</button>
      </form>
    </div>
  );
}