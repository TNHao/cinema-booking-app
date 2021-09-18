const initialState = {
    fileUploaded: ""
}

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILE_UPLOAD':
            return { ...state, fileUploaded: action.payload }

        default:
            return state
    }
}
export default AdminReducer;
