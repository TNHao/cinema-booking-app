import BoxMovie from 'components/BoxMovie/BoxMovie'
import CardMovie from 'components/CardMovie/CardMovie.'
import HomeCarousel from 'components/HomeCarousel/HomeCarousel'
import HomeMovie from 'components/HomeMovie/HomeMovie'
import ShowTimes from 'components/ShowTimes/ShowTimes'
import TrailerMovie from 'components/TrailerMovie/TrailerMovie'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Home.scss'


export default function Home() {

    const { isTrailer, trailer } = useSelector(state => state.TrailerReducer)

    return (
        <div className="home">
            <HomeCarousel />
            <BoxMovie />
            <HomeMovie />
            <div className={` ${ isTrailer ? 'd-none' : 'd-inline'} home__trailer`}>
                <TrailerMovie trailer={trailer}/>
            </div>
            <div className="home__showtime-title text-center mt-16">
                <span className=" text-3xl text-white">LỊCH CHIẾU PHIM</span>
            </div>
            <div className="home__showtime mx-auto container-lg bg-white rounded-lg p-8 mt-4">              
                <ShowTimes/>
            </div>
        </div>
    )
}
