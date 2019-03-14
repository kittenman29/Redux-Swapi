import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

// we'll need axios

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START });
    axios
        .get("https://swapi.co/api/people/")
        .then(res => {
            console.log(res.data.results)
            dispatch({ 
                type: FETCH_CHARACTERS_SUCCESS, 
                payload: res.data.results
            })
        })
        .catch(err => {
            // console.log(err)
            dispatch({
                type: FETCH_CHARACTERS_FAILURE,
                payload: err.response
            })
        });
}
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
