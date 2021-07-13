import actions from "../actions";

const storedTodos = JSON.parse(localStorage.getItem("todos")) || {
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = storedTodos, action) => {
  switch (action.type) {
    case actions.ADD:
      localStorage.setItem(
        "todos",
        JSON.stringify({ data: [...state.data, action.payload] })
      );
      return { data: [...state.data, action.payload], actionType: action.type };

    case actions.TOGGLE:
      let modifiedTodos = state.data.map((todo) => {
        if (todo.id === action.payload.id)
          return Object.assign({}, todo, { isDone: !todo.isDone });
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify({ data: modifiedTodos }));
      return { data: modifiedTodos, actionType: action.type };

    case actions.ARCHIVE:
      let archivedTodos = state.data.map((todo) => {
        if (todo.id === action.payload.id)
          return Object.assign({}, todo, { isArchive: !todo.isArchive });
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify({ data: archivedTodos }));
      return { data: archivedTodos, actionType: action.type };

    case actions.UPDATED:
      let updated = state.data.map((todo) => {
        if (todo.id === action.payload.id)
          return Object.assign({}, todo, { text: action.payload.text });
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify({ data: updated }));
      return { data: updated, actionType: action.type };

    case actions.REMOVE:
      const index = state.data.indexOf(action.payload);
      if (index > -1) {
        state.data.splice(index, 1);
      }
      localStorage.setItem("todos", JSON.stringify(state));
      return { data: [...state.data], actionType: action.type };

    case actions.CLEAR:
      return { data: [], actionType: action.type };

    default:
      return state;
  }
};
