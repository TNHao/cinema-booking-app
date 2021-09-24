import { quanLyDatVe } from "apis/QuanLyDatVeApi"
import { connection } from "index"
import { DISPLAY_LOADING, HIDING_LOADING } from "redux/Types/CarouselTypes/LoadingTypes"
import { DAT_VE_HOAN_TAT, GET_LIST_TICKET_ROOM, GHE_DANG_DAT } from "redux/Types/QuanLyDatVeTypes"
import { STATUS } from "utils/constants/SettingSystems"
import Swal from "sweetalert2"
import { history } from "App"




export const actGetListTicketRoomApi = (maLichChieu) => {
    return async dispatch => {
        try{
            let { data, status } = await quanLyDatVe.fetchListTicketRoom(maLichChieu)
            if(status === STATUS.SUCCESS){
                dispatch({
                    type : GET_LIST_TICKET_ROOM,
                    data : data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const actGheDangDat = (gheDangDat) => ({
    type: GHE_DANG_DAT,
    data : gheDangDat
})

export const actDatVeApi = (thongTinDatVe) => {
    return async (dispatch, getState) => {
        try{

            dispatch({                
                type : DISPLAY_LOADING
            })
            await quanLyDatVe.fetchDatVe(thongTinDatVe)
            
            await dispatch(actGetListTicketRoomApi(thongTinDatVe.maLichChieu))
            await dispatch({
                type : DAT_VE_HOAN_TAT
            })

            await dispatch({
                type : HIDING_LOADING
            })

            let userLogin = getState().QuanLyUserReducer.userLogin

            // connection.invoke('datGheThanhCong', userLogin, thongTinDatVe.maLichChieu)

            Swal.fire({
                title: "Đặt vé thành công",
                icon: "success",
                button: "OK",
            }).then(
                () => {
                    history.push("/home")
                }
            )

        }catch(err){
            console.log(err.response.data)
        }
    }
}

// export const datGheAction = (ghe, maLichChieu) => {
//     return async (dispatch, getState) => {

//         await dispatch({
//             type : GHE_DANG_DAT,
//             data : ghe
//         })

//         let listGheDangDat = getState().QuanLyDatVeReducer.listGheDangDat;
//         let taiKhoan = getState().QuanLyUserReducer.userLogin.taiKhoan;


//         listGheDangDat = JSON.stringify(listGheDangDat)

//         connection.invoke('datGhe', taiKhoan, listGheDangDat, maLichChieu)
//     }
// }