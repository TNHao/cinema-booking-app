import { quanLyRapApi } from "apis/QuanLyRapApi"
import { GET_INFOR_SHOWTIMES, GET_INFO_SHOWTIMES_CINEMA, GET_LIST_INFOR_THEATER } from "redux/Types/QuanLyRapTypes"
import { STATUS } from "utils/constants/SettingSystems"



export const actGetListInforTheater = () => {
    return async dispatch => {
        try{
            
            let { data, status } = await quanLyRapApi.fetchListTheater()
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_LIST_INFOR_THEATER,
                    data : data.content
                })
            }

        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actGetInfoShowtimes = (idMovie) => {
    return async dispatch => {
        try{
            let {data, status} = await quanLyRapApi.fetchInfoShowtimes(idMovie)
            if(status === STATUS.SUCCESS){
                dispatch({
                    type: GET_INFOR_SHOWTIMES,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actGetInfoShowtimesCinema = () => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyRapApi.fetchInfoShowtimesCinema()
            if( status === STATUS.SUCCESS){
                dispatch ({
                    type : GET_INFO_SHOWTIMES_CINEMA,
                    data : data.content
                })
            }
        }catch(err){

        }
    }
}