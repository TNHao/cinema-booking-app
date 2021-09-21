import { GET_DETAIL_MOVIE, GET_LIST_MOVIE, GET_LIST_MOVIE_BY_DATE, GET_LIST_MOVIE_PAGINATION } from "redux/Types/QuanLyPhimTypes"

const initialState = {
    listMovie : [],
    listMoviePagination : {},
    movieDetail : {},
    listMovieByDate : []
}

const QuanLyPhimReducer =  (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_MOVIE:
            return {...state, listMovie : action.data}

        case GET_LIST_MOVIE_PAGINATION : {           
            state.listMoviePagination = action.data
            return {...state}            
        }
        case GET_DETAIL_MOVIE:{
            
            return {...state, movieDetail: action.data}
        }
        case GET_LIST_MOVIE_BY_DATE : {
            return {...state, listMovieByDate: action.data}
        }
        default:
            return state
        }
}

export default QuanLyPhimReducer
