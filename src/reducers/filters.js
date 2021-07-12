import actions from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { data: [] }, action) => {
  switch (action.type) {
    case actions.FILTER_ALL:
      return { data: [...action.payload], actionType: action.type };

    case actions.FILTER_PENDING:
      return {
        data: action.payload.filter((todo) => !todo.isDone && !todo.isArchive),
        actionType: action.type,
      };

    case actions.FILTER_COMPLETED:
      return {
        data: action.payload.filter((todo) => todo.isDone),
        actionType: action.type,
      };

    case actions.FILTER_ARCHIVED:
      return {
        data: action.payload.filter((todo) => todo.isArchive),
        actionType: action.type,
      };

    case actions.UPDATED:
      let updated = action.payload.data.map((todo) => {
        if (todo.id === action.payload.id)
          return Object.assign({}, todo, { text: action.payload.text });
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify({data: updated}));
      return { data: updated, actionType: action.type };

    case actions.SEARCH:
      if (action.payload.text) {
        return {
          data: action.payload.data.filter((todo) =>
            todo.text.includes(action.payload.text)
          ),
          actionType: action.type,
        };
      }
      return { data: [...action.payload.data], actionType: action.type };

    default:
      return state;
  }
};
