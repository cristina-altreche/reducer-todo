import React from "react";

const TodoForm = (props) => {
  const { value, dispatch, setValue, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <span
        contentEditable="true"
        id="input"
        onInput={handleChange}
        onKeyPress={(e) => {
          if (e.charCode == 13) {
            handleSubmit(e);
          }
        }}
        value={value}
        type="text"
      />
    </form>
  );
};

export default TodoForm;
