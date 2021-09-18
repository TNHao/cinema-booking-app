const initialState = {
    movieSelected: "",
    theaterFranchiseSelected: "",
    theatersSelected: "",
    theaterIdSelected: "",
    ticketPrice: 0
}

const MovieScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE_SELECTED':
            return { ...state, movieSelected: action.payload }

        case 'SET_THEATER_FRANCHISE_SELECTED':
            return { ...state, theaterFranchiseSelected: action.payload }

        case 'SET_THEATERS_SELECTED':
            console.log(2)
            return { ...state, theatersSelected: action.payload }

        case 'SET_THEATER_ID_SELECTED':
            return { ...state, theaterIdSelected: action.payload }     

        case 'SET_TICKET_PRICE_SELECTED':
            return { ...state, ticketPrice: action.payload }     

        default:
            return state
    }
}
export default MovieScheduleReducer;
