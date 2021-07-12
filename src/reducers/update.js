import actions from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { data: [] }, action) => {
  switch (action.type) {
    case actions.UPDATE:
      let updated = action.payload.data.map((todo) => {
        if (todo.id === action.payload.id)
          return Object.assign({}, todo, { text: action.payload.text});
        return todo;
      });
      return { data: updated, actionType: action.type };
    default:
      return state;
  }
};
