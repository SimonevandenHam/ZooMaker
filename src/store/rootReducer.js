import { combineReducers } from "redux";

import currentZooReducer from "./currentZoo/reducer";
import allZoosReducer from "./allZoos/reducer";
import animalsReducer from "./animals/reducer";

const rootReducer = combineReducers({
  currentZoo: currentZooReducer,
  allZoos: allZoosReducer,
  animals: animalsReducer,
});

export default rootReducer;
