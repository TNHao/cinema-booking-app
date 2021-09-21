import { ADD_FOOD_TO_CART, GET_LIST_FOOD, MINUS_FOOD_TO_CART } from "redux/Types/QuanLyFoodTypes"

const initialState = {
    listFood : [],
}

export default (state = initialState, action) => {
    switch (action.type) {

    case GET_LIST_FOOD:
        return { ...state, listFood : action.data}
    case ADD_FOOD_TO_CART :
        let listFoodUpdate = [...state.listFood]
        let index = listFoodUpdate.findIndex(p => p.id === action.data.id)
        listFoodUpdate[index].quantity +=1
        state.listCartFood = listFoodUpdate
        return {...state}
    case MINUS_FOOD_TO_CART :
        let listFoodNew = [...state.listCartFood]
        let count = listFoodNew.findIndex(p => p.id === action.data.id)
        if(listFoodNew[count].quantity >= 1){
            listFoodNew[count].quantity -= 1
        } 
        state.listFood = listFoodNew
        return {...state}
    default:
        return state
    }
}
