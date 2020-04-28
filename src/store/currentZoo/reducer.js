const initialState = {
  zooName: null,
  budget: null,
  animals: [],
};

const currentZooReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_ZOO":
      return {
        ...state,
        zooName: action.payload.zooName,
        budget: action.payload.budget,
      };
    case "ADD_ANIMAL":
      return { ...state, animals: [...state.animals, action.payload] };
    case "SET_SELECTED_ANIMALS":
      return { ...state, animals: action.payload.animals };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default currentZooReducer;
