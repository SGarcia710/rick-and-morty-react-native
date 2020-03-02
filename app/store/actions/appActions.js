export const ADD_CHARACTER = '[App] add character';
export const SET_ACTUAL_CHARACTER = '[App] set actual character';
//TODO REMOVE_ACTUAL_CHARACTER

//WRAPPERS
export const addCharacter = character => {
  return {
    type: ADD_CHARACTER,
    payload: {character},
  };
};

export const setActualCharacter = character => {
  return {
    type: SET_ACTUAL_CHARACTER,
    payload: {character},
  };
};
