export const CREATE_NEW_ZOO = (zooName, budget) => ({
  type: "CREATE_NEW_ZOO",
  payload: { zooName: zooName, budget: budget },
});

export const ADD_ANIMAL = (animal) => ({
  type: "ADD_ANIMAL",
  payload: animal,
});

export const REMOVE_ANIMAL = (animal) => ({
  type: "REMOVE_ANIMAL",
  payload: animal,
});

export const RESET = (zoo) => ({
  type: "RESET",
  payload: zoo,
});
