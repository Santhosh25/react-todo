import { combineReducers } from "redux";

import todos from "./todos";
import filters from "./filters";
import update from "./update";

const rootReducer = () =>
  combineReducers({
    todos,
    filters,
    update
  });

export default rootReducer;
