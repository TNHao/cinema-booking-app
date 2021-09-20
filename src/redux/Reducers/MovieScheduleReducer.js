// const initialState = {
//     movieSelected: "",
//     theaterFranchiseSelected: "",
//     theatersSelected: "",
//     theaterIdSelected: "",
//     ticketPrice: 0
// }

// import { SET_LIST_FILM, SET_LIST_CINEPLEX,SET_LIST_CINEMA } from 'redux/types/movieScheduleTypes';
import * as cinemaTypes from 'redux/types/movieScheduleTypes';

// const MovieScheduleReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_MOVIE_SELECTED':
//             return { ...state, movieSelected: action.payload }

//         case 'SET_THEATER_FRANCHISE_SELECTED':
//             return { ...state, theaterFranchiseSelected: action.payload }

//         case 'SET_THEATERS_SELECTED':
//             console.log(2)
//             return { ...state, theatersSelected: action.payload }

//         case 'SET_THEATER_ID_SELECTED':
//             return { ...state, theaterIdSelected: action.payload }

//         case 'SET_TICKET_PRICE_SELECTED':
//             return { ...state, ticketPrice: action.payload }

//         default:
//             return state
//     }
// }
// export default MovieScheduleReducer;

/* ------------------------------- mentor code ------------------------------ */
const initialState = {
    // movieSelected: '',
    // theaterFranchiseSelected: '',
    // theatersSelected: '',
    // theaterIdSelected: '',
    // ticketPrice: 0,
    dsPhim: [],
    dsHeThongRap: [],
    dsCumRap: [],
};

const movieScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case cinemaTypes.SET_LIST_FILM:
            state.dsPhim = action.payload;
            break;
        case cinemaTypes.SET_LIST_CINEPLEX:
            state.dsHeThongRap = action.payload;
            break;

        case cinemaTypes.SET_LIST_CINEMA:
            state.dsCumRap = action.payload;
            break;
        default:
            break;
    }
    return { ...state };
};
export default movieScheduleReducer;
/* -------------------------------------------------------------------------- */
