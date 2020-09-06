import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});
