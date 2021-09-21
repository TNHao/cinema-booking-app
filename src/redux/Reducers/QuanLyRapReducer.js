import { data } from "autoprefixer"
import { GET_INFOR_SHOWTIMES, GET_INFO_SHOWTIMES_CINEMA, GET_LIST_INFOR_THEATER } from "redux/Types/QuanLyRapTypes"

const initialState = {
    listTheater : [],
    listShowtimes : {},
    listShowtimesCinema : []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case GET_LIST_INFOR_THEATER:
        return { ...state, listTheater : action.data }
    case GET_INFOR_SHOWTIMES :
        return {...state, listShowtimes : action.data}
    case GET_INFO_SHOWTIMES_CINEMA : 
        state.listShowtimesCinema = action.data
        return {...state}
    default:
        return state
    }
}
