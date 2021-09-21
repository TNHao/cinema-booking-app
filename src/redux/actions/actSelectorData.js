import axios from "axios"
import { SET_MOVIE_LIST, SET_THEATERS, SET_THEATER_FRANCHISES, SET_THEATER_ID } from "redux/Types/selectorTypes"

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
            await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
                method: "GET"
            }).then(res => {
                let remoteData = res.data.content;
                remoteData = remoteData.map(item => ({ maPhim: item.maPhim, tenPhim: item.tenPhim }));
                dispatch(actSetMovieList(remoteData));
            });

            // dispatch(actSetMovieList(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const actFetchTheaterFranchises = () => {
    return async (dispatch) => {
        try {
            await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinHeThongRap",
                method: "GET"
            }).then(res => {
                let remoteData = res.data.content;
                remoteData = remoteData.map(item => ({ maHeThongRap: item.maHeThongRap, tenHeThongRap: item.tenHeThongRap }));
                dispatch(actSetTheaterFranchises(remoteData));
            });

            // dispatch(actSetTheaterFranchises(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const actFetchTheaters = (theaterFranchiseSelected) => {
    return async (dispatch) => {
        try {
            await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterFranchiseSelected}`,
                method: "GET"
            }).then(res => {
                dispatch(actSetTheaters(res.data.content))
            });

        } catch (err) {
            console.log(err);
        }
    }
}