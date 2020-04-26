const initialState = {
  animals: [],
};

const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMALS":
      return {
        animals: action.payload,
      };
    default:
      return state;
  }
};

export default animalsReducer;
