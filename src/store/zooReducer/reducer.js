import { CREATE_NEW_ZOO } from "./action";

const initialState = {
  zooName: null,
  butget: null,
};

const newZooReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_ZOO:
      return action.payload;
    default:
      return state;
  }
};

export default newZooReducer;
