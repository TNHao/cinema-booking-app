import React from 'react'
import './CardMovie.scss'
import { Rate } from 'antd';
import { history } from 'App';
import { useDispatch } from 'react-redux';
import { actIsTrailer, actTrailer } from 'redux/actions/CarouselActions/TrailerActions';


export default function CardMovie({cardMovie}) {

    const dispatch = useDispatch()

    return (
        <div className="card__movie">
            <div className="card__item">
                <div className="poster__movie" onClick={() => {
                            dispatch(actIsTrailer(false))
                            dispatch(actTrailer(cardMovie.trailer))
                        }} >
                    <div className="over__lay">
                        <i className="fa fa-play-circle play__video"></i>
                    </div>
                    <div className="bg__movie" style={{ backgroundImage: `url(${cardMovie.hinhAnh}), url(https://picsum.photos/300)` }}>
                        <img src={cardMovie.hinhAnh} alt="anh" className="opacity-0" style={{ width: '100%', height: '450px' }} />
                    </div>
                    <div className="rating__star">
                        <div className="rating">
                            <span>{cardMovie.danhGia / 2}</span>
                        </div>
                        <div className="star">
                            <Rate className="text-sm" allowHalf value={cardMovie.danhGia/2} />
                        </div>
                    </div>
                </div>
                <div className="info__movie">
                    <div className="info__movie-title">
                        <span>{cardMovie.maNhom}</span>
                        <h3>{cardMovie.tenPhim.length > 25 ? cardMovie.tenPhim.substring(0, 25) + "..." : cardMovie.tenPhim}</h3>
                    </div>
                    <div className="muave">
                        <button onClick={() => {                            
                            history.push(`/detail/${cardMovie.maPhim}`)
                        }}>MUA VÉ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
