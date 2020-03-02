import {ADD_CHARACTER, SET_ACTUAL_CHARACTER} from '../actions/appActions';

import charactersData from '../data/characters-data.json';

const initialState = {
  characters: charactersData,
  actualCharacter: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER: {
      return {
        ...state,
        characters: [...state.characters, action.payload.character],
      };
    }
    case SET_ACTUAL_CHARACTER: {
      return {
        ...state,
        actualCharacter: action.payload.character,
      };
    }
    default:
      return state;
  }
};
