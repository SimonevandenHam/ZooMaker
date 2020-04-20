import { combineReducers } from "redux";

import newZooReducer from "./zooReducer/reducer";

const rootReducer = combineReducers({
  newZoo: newZooReducer,
});

export default rootReducer;
