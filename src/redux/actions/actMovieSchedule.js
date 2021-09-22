import { SET_MOVIE_SELECTED, SET_THEATERS_SELECTED, SET_THEATER_FRANCHISE_SELECTED, SET_THEATER_ID_SELECTED, SET_TICKET_PRICE_SELECTED } from "redux/Types/movieScheduleTypes"

export const actSetMovieSelected = (data) => ({
    type: SET_MOVIE_SELECTED,
    payload: data
})

export const actSetTheaterFranchiseSelected = (data) => ({
    type: SET_THEATER_FRANCHISE_SELECTED,
    payload: data
})

export const actSetTheatersSelected = (data) => ({
    type: SET_THEATERS_SELECTED,
    payload: data
})

export const actSetTheaterIdSelected = (data) => ({
    type: SET_THEATER_ID_SELECTED,
    payload: data
})

export const actSetTicketPriceSelected = (data) => ({
    type: SET_TICKET_PRICE_SELECTED,
    payload: data
})