import { carouselApi } from "apis/CarouselApi"
import { GET_LIST_BANNER } from "redux/Types/CarouselTypes/CarouselTypes"
import { STATUS } from "utils/constants/SettingSystems"



export const actGetListBanner = () => {
    return async dispatch => {
        try{
            let { data , status } = await carouselApi.fetchListBanner()
            if( status === STATUS.SUCCESS){
                dispatch({
                    type : GET_LIST_BANNER,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}