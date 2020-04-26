import { combineReducers } from "redux";

import newZooReducer from "./currentZoo/reducer";
import allZoosReducer from "./allZoos/reducer";
import animalsReducer from "./animals/reducer";

const rootReducer = combineReducers({
  newZoo: newZooReducer,
  allZoos: allZoosReducer,
  animals: animalsReducer,
});

export default rootReducer;
