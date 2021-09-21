import React from 'react'
import './TrailerMovie.scss'
import { useDispatch } from 'react-redux'
import { actIsTrailer } from 'redux/Actions/CarouselActions/TrailerActions'

export default function TrailerMovie(props) {

    const { trailer } = props
    const dispatch = useDispatch()
    return (
        <div className="trailer">
            <i className="fa fa-times-circle text-white" onClick={() => {
                dispatch(actIsTrailer(true))
            }}></i>
            <iframe className="trailer__movie mx-auto my-auto" width="900" height="600" src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>               
            </iframe>
        </div>
    )
}
