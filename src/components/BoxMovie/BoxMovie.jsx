import React, {useEffect, useState} from 'react'
import './BoxMovie.scss'
import a from '../../assets/imgs/a.png'
import b from '../../assets/imgs/b.png'
import c from '../../assets/imgs/c.png'
import d from '../../assets/imgs/d.png'
import { useSelector, useDispatch } from 'react-redux'
import { actGetListMovie, actGetListMovieByDate } from 'redux/actions/QuanLyPhimActions'
import moment from 'moment'



    // Lấy 5 ngày tiếp theo tính từ ngày hiện tại
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    let ddd = new Date(today);
    let dayday = moment(ddd).format('L')
    let nextDay = new Date(ddd);

    let arrDay = []
    arrDay.push(dayday)
    let dday;
    for (let i = 1; i <= 5; i++) {
        nextDay.setDate(nextDay.getDate() + 1);
        dday = nextDay
        nextDay = dday
        arrDay.push(moment(dday).format('L'))
    }

export default function BoxMovie() {

    
    const [currentDay, setCurrentDay] = useState(moment(dayday).format('DD/MM/yyyy'))
    const { listMovie } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(actGetListMovie())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(actGetListMovieByDate(currentDay))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDay])


    return (
        <div className="container-lg box__movie">
            <div className="welcome">
                <div className="welcome__title">
                    <h1>WELCOME TO IVANTIME</h1>
                    <span>WHAT ARE YOU LOOKING FOR</span>
                </div>
                <div className="welcome__button">
                    <button>PROCEED</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 content__box">
                <div className="content__box-movie">
                    <div className="logo__select">
                        <img src={a} alt="anh" />
                        <span>MOVIE</span>
                    </div>
                    <select>
                        {listMovie?.map((item, index) => {
                            return <option key={index} value={index}>{item.tenPhim}</option>
                        })}
                    </select>
                </div>
                <div className="content__box-movie">
                    <div className="logo__select">
                        <img src={b} alt="anh" />
                        <span>THEATER</span>
                    </div>
                    <select defaultValue="DEFAULT">
                        <option defaultValue="choose theater" value="DEFAULT" disabled={true}>Choose theater</option>
                    </select>
                </div>
                <div className="content__box-movie">
                    <div className="logo__select">
                        <img src={c} alt="anh" />
                        <span>DATE</span>
                    </div>
                    <select onChange={(e) => {
                        setCurrentDay(e.target.value)
                        console.log(e.target.value)
                    }} >
                        {arrDay.map((item, index) => {
                            return <option value={moment(item).format('DD/MM/yyyy')} key={index}>{item}</option>
                        })}
                    </select>
                </div>
                <div className="content__box-movie">
                    <div className="logo__select">
                        <img src={d} alt="anh" />
                        <span>HOUR</span>
                    </div>
                    <select defaultValue="DEFAULT">
                        <option defaultValue="choose hour" value="DEFAULT" disabled={true}>Choose hour</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
