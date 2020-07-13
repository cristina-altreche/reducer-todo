import React from "react";

const TodoList = (props) => {
  const { todos, onComplete } = props;
  return (
    <div className="todoLists">
      {todos.map((todo) => (
        <div className="singleList" onClick={() => onComplete(todo.id)}>
          <p className={todo.completed ? "strike" : ""}>{todo.item}</p>
          <p>{todo.completed ? "DONE" : "-"}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
