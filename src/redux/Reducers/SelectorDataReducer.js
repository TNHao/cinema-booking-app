const initialState = {
    movieList: [],
    theaterFranchises: [],
    theaters: [],
    theaterId: [],
    detailSchedule: {}
}

const SelectorDataReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'SET_MOVIE_LIST':
            return { ...state, movieList: action.payload }

        case 'SET_THEATER_FRANCHISES':
            return { ...state, theaterFranchises: action.payload }

        case 'SET_THEATERS':
            return { ...state, theaters: action.payload }

        case 'SET_THEATER_ID':
            console.log(4)
            return { ...state, theaterId: action.payload }

        case 'SET_DETAIL_SCHEDULE':
            return { ...state, detailSchedule: action.payload }

        default:
            return state
    }
}
export default SelectorDataReducer;
