import baseServices from "services/baseServices";
import { USER_LOGIN } from "utils/constants/SettingSystems";
import { SET_MOVIE_LIST, SET_THEATERS, SET_THEATER_FRANCHISES, SET_THEATER_ID } from "redux/Types/selectorTypes"

const baseSevice = new baseServices();
const maNhom = localStorage.getItem(USER_LOGIN) ? JSON.parse(localStorage.getItem(USER_LOGIN)).maNhom : "GP01";

export const actSetMovieList = (data) => ({
    type: SET_MOVIE_LIST,
    payload: data
})

export const actSetTheaterFranchises = (data) => ({
    type: SET_THEATER_FRANCHISES,
    payload: data
})

export const actSetTheaters = (data) => ({
    type: SET_THEATERS,
    payload: data
})

export const actSetTheaterId = (data) => ({
    type: SET_THEATER_ID,
    payload: data
})

export const actFetchMovieData = () => {
    return async (dispatch) => {
        try {
            await baseSevice.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
                .then(res => {
                    let remoteData = res.data.content;
                    remoteData = remoteData.map(item => ({ maPhim: item.maPhim, tenPhim: item.tenPhim }));
                    dispatch(actSetMovieList(remoteData));
                });

        } catch (err) {
            console.log(err);
        }
    }
}

export const actFetchTheaterFranchises = () => {
    return async (dispatch) => {
        try {
            await baseSevice.get('/api/QuanLyRap/LayThongTinHeThongRap')
                .then(res => {
                    let remoteData = res.data.content;
                    remoteData = remoteData.map(item => ({ maHeThongRap: item.maHeThongRap, tenHeThongRap: item.tenHeThongRap }));
                    dispatch(actSetTheaterFranchises(remoteData));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

export const actFetchTheaters = (theaterFranchiseSelected) => {
    return async (dispatch) => {
        try {
            await baseSevice.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterFranchiseSelected}`)
                .then(res => {
                    dispatch(actSetTheaters(res.data.content))
                });
        } catch (err) {
            console.log(err);
        }
    }
}