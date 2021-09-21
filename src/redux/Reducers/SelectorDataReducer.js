import { SET_MOVIE_LIST, SET_THEATERS, SET_THEATER_FRANCHISES, SET_THEATER_ID } from "redux/Types/selectorTypes"

const initialState = {
    movieList: [],
    theaterFranchises: [],
    theaters: [],
    theaterId: [],
}

const SelectorDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return { ...state, movieList: action.payload }

        case SET_THEATER_FRANCHISES:
            return { ...state, theaterFranchises: action.payload }

        case SET_THEATERS:
            return { ...state, theaters: action.payload }

        case SET_THEATER_ID:
            return { ...state, theaterId: action.payload }

        default:
            return state
    }
}
export default SelectorDataReducer;
