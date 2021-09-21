import { DISPLAY_LOADING, HIDING_LOADING } from "redux/Types/CarouselTypes/LoadingTypes"

const initialState = {
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADING:
            state.isLoading = true
            return { ...state }
        case HIDING_LOADING: {
            state.isLoading = false
            return { ...state }
        }
        default:
            return state
    }
}
