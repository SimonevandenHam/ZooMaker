import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./store/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, enhancer);

export default store;
