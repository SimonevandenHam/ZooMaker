import { combineReducers } from "redux";

import newZooReducer from "./currentZoo/reducer";
import allZoosReducer from "./allZoos/reducer";

const rootReducer = combineReducers({
  newZoo: newZooReducer,
  allZoos: allZoosReducer,
});

export default rootReducer;
