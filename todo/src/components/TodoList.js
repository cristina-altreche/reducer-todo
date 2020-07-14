import React, {useReducer} from 'react';
import {reducer, toDos} from '../reducers/simpleReducer';
import {Completed} from './Completed';
import {TodoForm} from './TodoForm';

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, toDos);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map(toDo => {
        return <Completed todo={toDo} dispatch={dispatch} key={toDo.id} />
      })}
    </div>
  )
}