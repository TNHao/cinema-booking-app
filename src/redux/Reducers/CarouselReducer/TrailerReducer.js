import { IS_TRAILER, TRAILER } from "redux/Types/CarouselTypes/TrailerTypes"

const initialState = {
    isTrailer : true,
    trailer : ''
}

const TrailerReducer = (state = initialState, action) => {
    switch (action.type) {

    case IS_TRAILER:
        state.isTrailer = action.data
        return { ...state}
    case TRAILER : 
        return { ...state, trailer : action.data}
    default:
        return state
    }
}

export default TrailerReducer
