
import { 
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS, 
  FETCH_CHARACTERS_FAILURE 
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isLoading: true
      };
      case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        characters: action.payload
      };
      case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: "",
        isLoading: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
