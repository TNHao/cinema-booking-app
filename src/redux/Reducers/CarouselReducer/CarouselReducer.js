import { GET_LIST_BANNER } from "redux/Types/CarouselTypes/CarouselTypes"

const initialState = {
    listBanner : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_BANNER:
            return {...state, listBanner : action.data}

        default:
            return state
    }
}
