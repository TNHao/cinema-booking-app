import { quanLyFood } from "apis/QuanLyFoodApi"
import { ADD_FOOD_TO_CART, GET_LIST_FOOD, MINUS_FOOD_TO_CART } from "redux/Types/QuanLyFoodTypes"
import { STATUS } from "utils/constants/SettingSystems"



export const actGetListFoodApi = () => {
    return async dispatch => {
        try{
            let { data, status} = await quanLyFood.fetchGetListFood()
            console.log(data)
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_LIST_FOOD,
                    data
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actAddFoodToCart = (food) => ({
    type : ADD_FOOD_TO_CART,
    data : food
})

export const actMinusFoodToCart = (food) => ({
    type : MINUS_FOOD_TO_CART,
    data : food
})