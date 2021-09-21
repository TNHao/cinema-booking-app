import React, { Fragment, useEffect } from 'react'
import { Carousel } from 'antd';
import './HomeCarousel.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actGetListBanner } from 'redux/Actions/CarouselActions/CarouselActions';

const contentStyle = {
    height: '100vh',
    color: '#fff',
    backgroundPosition: 'cover',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
};


export default function HomeCarousel() {

    const { listBanner } = useSelector(state => state.CarouselReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actGetListBanner())
    }, [])

    return (
        <Carousel effect="fade">
            {listBanner?.map((item, index) => {
                return (
                    <Fragment key={item.maBanner}>
                        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                            {/* <img src={item.hinhAnh} alt='anh' className="w-full opacity-0" /> */}
                        </div>
                    </Fragment>
                )
            })}
        </Carousel>
    )
}
