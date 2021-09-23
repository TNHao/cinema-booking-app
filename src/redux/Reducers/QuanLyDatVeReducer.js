import { DAT_GHE, DAT_VE_HOAN_TAT, GET_LIST_TICKET_ROOM, GHE_DANG_DAT } from "redux/Types/QuanLyDatVeTypes"

const initialState = {
    listTicketRoom : {},
    listGheDangDat : [],
    listGheKhachDat : []
}

const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

    case GET_LIST_TICKET_ROOM:
        return { ...state, listTicketRoom : action.data}
    case GHE_DANG_DAT:{
        let listGheDangDatUpdate = [...state.listGheDangDat]
        let index = listGheDangDatUpdate.findIndex( p => p.maGhe === action.data.maGhe)
        if(index !== -1){
            listGheDangDatUpdate.splice(index, 1)
        }else{
            listGheDangDatUpdate.push(action.data)
        }
        state.listGheDangDat = listGheDangDatUpdate
        return {...state}
    }
    case DAT_VE_HOAN_TAT :
        state.listGheDangDat = []
        return {...state}
    case DAT_GHE : 
        state.listGheKhachDat = action.data
        return {...state}
    default:
        return state
    }
}

export default QuanLyDatVeReducer
