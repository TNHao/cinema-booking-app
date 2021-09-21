import { SET_FILE_UPLOAD } from "redux/Types/fileUploadTypes";

export const actFileUpload = (data) => ({
    type: SET_FILE_UPLOAD,
    payload: data
})