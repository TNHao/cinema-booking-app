

const initialState = {

}

const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

    case '':
        return { ...state}

    default:
        return state
    }
}
export default QuanLyPhimReducer
