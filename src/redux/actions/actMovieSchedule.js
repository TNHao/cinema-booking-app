// export const actSetMovieSelected = (data) => ({
//     type: "SET_MOVIE_SELECTED",
//     payload: data
// })

// export const actSetTheaterFranchiseSelected = (data) => ({
//     type: "SET_THEATER_FRANCHISE_SELECTED",
//     payload: data
// })

// export const actSetTheatersSelected = (data) => ({
//     type: "SET_THEATERS_SELECTED",
//     payload: data
// })

// export const actSetTheaterIdSelected = (data) => ({
//     type: "SET_THEATER_ID_SELECTED",
//     payload: data
// })

// export const actSetTicketPriceSelected = (data) => ({
//     type: "SET_TICKET_PRICE_SELECTED",
//     payload: data
// })

/* ------------------------------- mentor code ------------------------------ */

import { MovieManagementApi, CineplexManagementApi } from 'apis/adminManagementServices';

import { SET_LIST_FILM, SET_LIST_CINEPLEX, SET_LIST_CINEMA } from 'redux/types/movieScheduleTypes';

const movieManagementApi = new MovieManagementApi();
const cineplexManagementApi = new CineplexManagementApi();

export const actFetchAllFilm = () => {
    const filmPromise = movieManagementApi.fetchData();
    return (dispatch) => {
        filmPromise.then((rs) => {
            const action = {
                type: SET_LIST_FILM,
                payload: rs.data.content,
            };
            dispatch(action);
        });
    };
};

export const actFetchAllCineplex = () => {
    const cineplexPromise = cineplexManagementApi.fetchAll();
    return (dispatch) => {
        cineplexPromise.then((rs) => {
            const action = {
                type: SET_LIST_CINEPLEX,
                payload: rs.data.content,
            };
            dispatch(action);
        });
    };
};

export const actGetAllCinemaByCineplex =(maHeThongRap)=>{
    const cineplexPromise = cineplexManagementApi.getAllCinemaByCineplex(maHeThongRap);
    return (dispatch) => {
        cineplexPromise.then((rs) => {
            const action = {
                type: SET_LIST_CINEMA,
                payload: rs.data.content,
            };
            dispatch(action);
        });
    };
}

/* -------------------------------------------------------------------------- */
