import Banner from 'components/Banner/Banner'
import React, { useEffect } from 'react'
import food from '../../assets/imgs/food.png'
import './Food.scss'
import { useSelector, useDispatch } from 'react-redux'
import { actDatVeApi, actGetListTicketRoomApi } from 'redux/actions/QuanLyDatVeActions'
import { actAddFoodToCart, actGetListFoodApi, actMinusFoodToCart } from 'redux/actions/QuanLyFoodActions'
import { thongTinDatVe } from 'models/ThongTinDatVe'

export default function Food(props) {

    const { listTicketRoom, listGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { listFood } = useSelector(state => state.QuanLyFoodReducer)
    const dispatch = useDispatch()



    const { thongTinPhim} = listTicketRoom

    useEffect(() => {
        dispatch(actGetListTicketRoomApi(props.match.params.maLichChieu))
        dispatch(actGetListFoodApi())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const tongTien = (array) => {
        return array.reduce((sum, item) => {
            return sum += item.giaVe
        }, 0)
    }

    const tongTienFood = (array) => {
        return array.reduce((sum, item) => {
            return sum += (item.quantity * item.price)
        }, 0)
    }
    return (
        <div className="food">
            <Banner thongTinPhim={thongTinPhim} />
            <div className="food__content">
                <div className="food__title">
                    <span>WE HAVE FOOD</span>
                    <p>Prebook Your Meal and Save More!</p>
                </div>
                <div className="food__order">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <div className="col-span-2 sm:col-span-3 lg:col-span-2 lg:mr-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {listFood?.map((item, index) => {
                                    return (
                                        <div className="food__card" key={index}>
                                            <img src={food} alt="food" />
                                            <div className="food__card-footer">
                                                <span className="food__card-name">{item.name}</span>
                                                <div className="food__card-number">
                                                    <button className="button__left" onClick={() => {
                                                        dispatch(actMinusFoodToCart(item))
                                                    }} >-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className="button__right" onClick={() => {
                                                        dispatch(actAddFoodToCart(item))
                                                    }}>+</button>
                                                </div>
                                            </div>
                                            <div className="food__price">
                                                <span>{item.price.toLocaleString()}đ</span>
                                            </div>
                                        </div>
                                    )
                                })}                               
                            </div>
                        </div>
                        <div className="booking__summery col-span-2 ml-4 sm:col-span-3 mx-auto lg:col-span-1">
                            <h4>BOOKING SUMMERY</h4>
                            <div className="booking__summery-info">
                                <div className="info__1">
                                    <span>{thongTinPhim?.tenPhim}</span>
                                    <p>2D | DIGITAL</p>
                                </div>
                                <div className="info__2">
                                    <div className="info__2-left">
                                        <span>{thongTinPhim?.diaChi}</span>
                                        <p>{thongTinPhim?.ngayChieu}, {thongTinPhim?.gioChieu}</p>
                                    </div>
                                    <div className="info__2-right">
                                        <span>01</span>
                                        <p>Ticket</p>
                                    </div>
                                </div>
                                <div className="info__3">
                                    <span>POSITION</span>
                                    <div className="flex">
                                        {listGheDangDat?.map((ghe) => {
                                            return <p key={ghe.stt}>{ghe.tenGhe}, </p>
                                        })}
                                    </ div>
                                </div>
                                <div className="info__4">
                                    <span>TICKET PRICE</span>
                                    <p>{tongTien(listGheDangDat).toLocaleString()}đ</p>
                                </div>
                                <div className="info__5">
                                    <span>FOOD and BEVERAGE</span>
                                    <p>{tongTienFood(listFood).toLocaleString()}đ</p>
                                </div>
                                <div className="info__6">
                                    <span>AMOUNT PAYABLE</span>
                                    <p>{(tongTien(listGheDangDat) + tongTienFood(listFood)).toLocaleString()}đ</p>
                                </div>
                                <div className="info__7">
                                    <button onClick={() => {
                                        thongTinDatVe.maLichChieu = thongTinPhim.maLichChieu
                                        thongTinDatVe.danhSachVe = listGheDangDat
                                        dispatch(actDatVeApi(thongTinDatVe))
                                    }}>PROCEED</button>
                                </div>
                            </div>
                            <div className="note">
                                <p>NOTE: Please give us 15 minutes for F&amp;B preparation once you're at the cinema.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
