export const initialState = {
  task: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            item: action.payload,
            id: new Date(),
            completed: false,
          },
        ],
      };
    case "MARK_COMPLETE":
      return { todos: action.payload };
    case "CLEAR_COMPLETE":
      return { todos: action.payload };

    default:
      return state;
  }
};
