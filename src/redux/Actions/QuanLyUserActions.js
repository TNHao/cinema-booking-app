import { quanLyUserApi } from "apis/QuanLyUserApi"
import { history } from "App"
import { GET_INFO_USER_LOGIN, GET_TYPE_USER, GET_USER, LOG_OUT } from "redux/Types/QuanLyUserTypes"
import { ACCESS_TOKEN, STATUS, USER_LOGIN } from "utils/constants/SettingSystems"
import Swal from "sweetalert2"



export const actLogin = (userLogin) => {
    return async dispatch => {
        try{
            let { data , status } = await quanLyUserApi.fetchUserLogin(userLogin)

            localStorage.setItem(ACCESS_TOKEN, data.content.accessToken)
            localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))

            if( status === STATUS.SUCCESS){
                dispatch({
                    type : GET_USER,
                    data : data.content
                })
            }
            await Swal.fire({
                icon: 'success',
                title: 'Login Sucessful',
                showConfirmButton: false,
                timer: 1500
            })
            await history.push("/home")
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actRegister = (userRegister) => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyUserApi.fetchUserRegister(userRegister)
            await Swal.fire({
                icon: 'success',
                title: 'Register successful',
                showConfirmButton: false,
                timer: 1500
            })
            history.push('/login')
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actGetTypeUser = () => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyUserApi.fetchTypeUser()
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_TYPE_USER,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actGetInFoUserLogin = () => {
    return async dispatch => {
        try{    
            let { data , status} = await quanLyUserApi.fetchInfoUserLogin()
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_INFO_USER_LOGIN,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actUpdateUserLogin = (userLoginUpdate) => {
    return async dispatch => {
        try{
            let { data , status } = await quanLyUserApi.updateUserLogin(userLoginUpdate)
            if( status === STATUS.SUCCESS){
                await dispatch(actGetInFoUserLogin())
                await Swal.fire({
                    icon: 'success',
                    title: 'Login Sucessful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}