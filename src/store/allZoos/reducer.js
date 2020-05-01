const initialState = { zoos: [] };

const allZoosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ZOO":
      return {
        ...state,
        zoos: [...state.zoos, action.payload],
      };
    case "REMOVE_ZOO":
      return { ...state, zoo: action.payload };
    default:
      return state;
  }
};

export default allZoosReducer;
