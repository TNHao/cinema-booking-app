import { ERROR_USER } from "redux/Types/QuanLyUserTypes"
import { GET_INFO_USER_LOGIN, GET_TYPE_USER, GET_USER, LOG_OUT } from "redux/Types/QuanLyUserTypes"
import { USER_LOGIN } from "utils/constants/SettingSystems"

let user = {}

if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
    
}

const initialState = {
    userLogin : user,
    typeUser : [],
    infoUserLogin : [],
    err : ''
}

const QuanLyUserReducer =  (state = initialState, action) => {
    switch (action.type) {

    case GET_USER:
        return { ...state, userLogin : action.data}
    case ERROR_USER:
        return {...state, err : action.data}
    case LOG_OUT:
        localStorage.removeItem(USER_LOGIN)
        state.userLogin = {}
        return {...state}
    case GET_TYPE_USER:
        state.typeUser = action.data
        return {...state}
    case GET_INFO_USER_LOGIN : 
        state.infoUserLogin = action.data
        return {...state}
    default:
        return state
    }
}

export default QuanLyUserReducer
