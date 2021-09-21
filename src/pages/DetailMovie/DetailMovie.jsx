import React, { useEffect, useState } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useSelector, useDispatch } from 'react-redux';
import './DetailMovie.scss'
import moment from 'moment';
import '../../assets/style/circle.css'
import { Rate } from 'antd';
import { actGetInfoShowtimes } from 'redux/actions/QuanLyRapActions';
import b from '../../assets/imgs/b.png'
import c from '../../assets/imgs/c.png'
import anh1 from '../../assets/imgs/anh1.png'
import anh2 from '../../assets/imgs/anh2.png'
import anh3 from '../../assets/imgs/anh3.png'
import chair from '../../assets/imgs/chair.png'
import b1 from '../../assets/imgs/b1.png'
import b2 from '../../assets/imgs/b2.png'
import play from '../../assets/imgs/play.png'
import { USER_LOGIN } from 'utils/constants/SettingSystems';
import { history } from 'App';
import Swal from 'sweetalert2'


let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd;

let d = new Date(today);
let dayday = moment(d).format('L')

let nextDay = new Date(d);


let arrDay = []
arrDay.push(dayday)
let dday;
for (let i = 1; i <= 10; i++) {
    nextDay.setDate(nextDay.getDate() + 1);
    dday = nextDay
    nextDay = dday
    arrDay.push(moment(dday).format('L'))

}

export default function DetailMovie(props) {

    const [cinema, setCinema] = useState('BHDStar')
    const [currentDay, setCurrentDay] = useState('09/07/2021')

    const { listShowtimes } = useSelector(state => state.QuanLyRapReducer)
    const { listTheater } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        // dispatch(actGetDetailMovie(props.match.params.idMovie))
        dispatch(actGetInfoShowtimes(props.match.params.idMovie))
    }, [])



    // let arrCumRapChieu = {}
    // arrCumRapChieu = listShowtimes.heThongRapChieu.find(p => p.maHeThongRap === cinema)

    // console.log(arrCumRapChieu)
    // console.log(listShowtimes.heThongRapChieu?.find(p => p.maHeThongRap === cinema))


    return (
        <>
        <div className="detail__movie" style={{ backgroundImage: `url(${listShowtimes.hinhAnh})` }} >
            <CustomCard
                className="custom__card pb-0"
                effectColor="#000000" // required
                color="#000000" // default color is white
                blur={5} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="container-lg grid grid-cols-12 md:mt-48 lg:mt-80">
                    <div className="col-start-1 col-span-12 md:col-span-9 ">
                        <div className="detail__movie-title grid  md:grid-cols-5 lg:grid-cols-3">
                            <div className="detail__movie-poster">
                                <img src={listShowtimes.hinhAnh} alt="anh" />
                                <div className="poster__overlay"></div>
                                <div className="poster__play">
                                    <img src={play} alt="play"></img>
                                </div>
                            </div>
                            <div className="col-span-3 md:col-start-3 lg:col-start-2 detail__movie-infor my-auto">
                                <div className="movie__infor">
                                    <h1>{listShowtimes.tenPhim}</h1>
                                    <span>ENGLISH, VIETNAMESE</span>
                                    <br/>
                                    <div className="mt-2">
                                        <span className="typeof__movie">2D | Digital</span>
                                        <span className="movie__infor-maNhom">{listShowtimes.maNhom}</span>
                                    </div>
                                    <div className="movie__infor-time">
                                        <div className="movie__infor-day flex">
                                            <i className="fa fa-calendar-alt"></i>
                                            <span>{moment(listShowtimes.ngayKhoiChieu).format('L')}</span>
                                        </div>
                                        <div className="movie__infor-minutes flex">
                                            <i className="fa fa-hourglass-half"></i>
                                            <span>120 minutes</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="danh__gia hidden md:col-start-11 md:block md:col-span-3 my-auto flex-col items-center">
                        <h1 className="text-xl text-white pl-3">Đánh Giá</h1>
                        <h1 className="text-blue-600 text-2xl"><Rate allowHalf value={listShowtimes.danhGia / 2} style={{ color: 'yellow', fontSize: 15 }} /></h1>
                        <div className={`c100 p${listShowtimes.danhGia * 10} medium green`} style={{margin: '0'}}>
                            <span>{listShowtimes.danhGia / 2}/5</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </CustomCard>
        </div>
        <div className="detail__movie-banner">
            <div className="container-lg">
                <div className="banner__detail-content grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
                    <div className="text-center">
                        <img src={b1} alt="cake"></img>
                        <span class="text-white pl-2 font-weight-bold">88%</span>
                        <p class="text-white">Tomatometer</p>
                    </div>
                    <div className="text-center">
                        <img src={b2} alt="tomato"></img>
                        <span class="text-white pl-2 font-weight-bold">88%</span>
                        <p class="text-white">Tomatometer</p>
                    </div>
                    <div className="text-center">
                        <i class="fa fa-heart"></i>
                        <span class="text-white pl-2 font-weight-bold">88%</span>
                        <p class="text-white">Tomatometer</p>
                    </div>
                    <div className="text-center">
                        <a href="#booking">
                            <button className="booking">BOOKING</button>
                        </a>                    
                    </div>
                </div>
            </div>
        </div>
        <div id="booking" className="detail__movie-content container-lg grid grid-cols-12 mt-40">
                    <div className="col-start-1 col-span-12 md:col-span-8">
                        <div className="detail__movie-mota">
                            <h1 className="text-center text-3xl">SUMERY</h1>
                            <p className="text-white text-xl tracking-wider">{listShowtimes.moTa}</p>
                        </div>
                        <div className="detail__movie-box">
                            <div className="detail__movie-theater">
                                <img src={b} alt="anh" />
                                <span>Theater</span>
                                <select name="theater" onChange={(e) => {
                                    console.log(e.target.value)
                                    setCinema(e.target.value)
                                }}>
                                    {listTheater?.map((item, index) => {
                                        return <option key={index} value={item.maHeThongRap}>{item.maHeThongRap}</option>
                                    })}
                                </select>
                            </div>
                            <div className="detail__movie-date">
                                <img src={c} alt="anh" />
                                <span>Date</span>
                                <select name="date" onChange={(e) => {
                                    console.log(e.target.value)
                                    setCurrentDay(e.target.value)
                                }}>
                                    {arrDay.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div id="cinema" className="detail__movie-cinema">
                            {listShowtimes.heThongRapChieu?.find(p => p.maHeThongRap === cinema) == undefined ? '' : listShowtimes.heThongRapChieu?.find(p => p.maHeThongRap === cinema).cumRapChieu?.map((item, index) => {
                                return (
                                    <div className="ShowTime_Ticket row" key={index}>
                                        <div className="ShowTime_Branch col-12 col-sm-6 col-lg-5 my-auto">
                                            <div className="row flex">
                                                <div className="ShowTime_Left col-7 col-lg-9">
                                                    <i className="fa fa-heart mr-2"></i>
                                                    <span className="ml-6">{item.tenCumRap}</span>
                                                </div>
                                                <div className="ShowTime_Right col-5 col-lg-3 my-auto">
                                                    <i class="fa fa-map-marker-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ShowTime_Hours col-12 col-sm-6 col-lg-7 mt-3 mt-lg-0" style={{ overflow: 'auto', cursor: 'pointer' }} >
                                            <div className="p-4" style={{ whiteSpace: 'nowrap', }}>
                                                {/* {arrDay.map((item, index) => {
                                                return <button className="btn btn-danger">{item}</button>
                                            })} */}
                                                {item.lichChieuPhim?.map((item, index) => {
                                                    // thay bang currentDay
                                                    if (moment(item.ngayChieuGioChieu).format('L') > moment(new Date('03/01/2021')).format('L')) {
                                                        return <button key={index} onClick={() => {
                                                            if (localStorage.getItem(USER_LOGIN)) {
                                                                Swal.fire({
                                                                    title: 'Welcome!',
                                                                    text: 'SELECT YOUR SEAT',
                                                                    imageUrl: `${chair}`,
                                                                    imageWidth: 300,
                                                                    imageHeight: 200,
                                                                    imageAlt: 'image',
                                                                    confirmButtonText: 'OK'
                                                                }).then( () => {
                                                                    history.push(`/buyticket/${item.maLichChieu}`)
                                                                })
                                                                
                                                            } else {
                                                                Swal.fire({
                                                                    icon: 'error',
                                                                    title: 'FAIL',
                                                                    text: 'Bạn chưa đăng nhập. Vui lòng đăng nhập!',
                                                                }).then(() => {
                                                                    history.push('/login')
                                                                })
                                                            }
                                                        }}>{moment(item.ngayChieuGioChieu).format('LT')}</button>
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 md:col-start-10">
                        <h5 className="text-center text-3xl">APPLICABLE OFFER</h5>
                        <div className="detail__movie-offer">
                            <img src={anh1} alt="anh1" />
                            <p class="ApplicableOffer_Title__QL-CE">Amazon Pay Cashback</p>
                            <span class="ApplicableOffer_Desc__1j5b_">Win Cashback Upto Rs 300*</span>
                        </div>
                        <div className="detail__movie-offer">
                            <img src={anh2} alt="anh2" />
                            <p class="ApplicableOffer_Title__QL-CE">PayPal</p>
                            <span class="ApplicableOffer_Desc__1j5b_">Transact first time with Paypal and get 100% cashback up to Rs. 500</span>
                        </div>
                        <div className="detail__movie-offer">
                            <img src={anh3} alt="anh3" />
                            <p class="ApplicableOffer_Title__QL-CE">HDFC Bank</p>
                            <span class="ApplicableOffer_Desc__1j5b_">Get 15% discount up to INR 100* and INR 50* off on F&amp;B T&amp;C apply</span>
                        </div>
                    </div>
                </div>
        </>
    )
}
