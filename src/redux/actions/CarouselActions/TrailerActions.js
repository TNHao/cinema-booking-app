import { IS_TRAILER, TRAILER } from "redux/Types/CarouselTypes/TrailerTypes";



export const actIsTrailer = (isTrailer) => ({
    type : IS_TRAILER,
    data : isTrailer
})

export const actTrailer = (trailer) => ({
    type : TRAILER,
    data : trailer
})