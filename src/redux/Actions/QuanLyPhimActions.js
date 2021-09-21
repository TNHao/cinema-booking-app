import { quanLyPhim } from "apis/QuanLyPhimApi"
import { GET_DETAIL_MOVIE, GET_LIST_MOVIE, GET_LIST_MOVIE_BY_DATE, GET_LIST_MOVIE_PAGINATION } from "redux/Types/QuanLyPhimTypes"
import { STATUS } from "utils/constants/SettingSystems"



export const actGetListMovie = () => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyPhim.fetchListMovie()
            if( status === STATUS.SUCCESS ){
                dispatch({
                    type : GET_LIST_MOVIE,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}


export const actGetListMoviePagination = (page, pageSize) => {
    return async dispatch => {
        try{
            let{ data, status} = await quanLyPhim.fetchListMoviePagination(page, pageSize)
            // console.log(data)
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_LIST_MOVIE_PAGINATION,
                    data : data.content
                })
            }
            
        }catch(err){

        }
    }
}

export const actGetDetailMovie = (idMovie) => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyPhim.fetchDetailMovie(idMovie)
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_DETAIL_MOVIE,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actGetListMovieByDate = (startDate) => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyPhim.fetchListMovieByDate(startDate)
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_LIST_MOVIE_BY_DATE,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}