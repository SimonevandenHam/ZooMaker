import { createStore } from "redux";
import throttle from "lodash/throttle";

import rootReducer from "./store/rootReducer";
import { loadState, saveState } from "./api/localStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000) //gets only called once per second
);

export default store;
