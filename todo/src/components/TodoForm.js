import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/simpleReducer";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
  <div className='form-div'>
      
      
      <form>
          <input/>
          <button>Add</button>
          <button>clear</button>
      </form>
    
  
  </div>
  )
};

export default TodoForm;
