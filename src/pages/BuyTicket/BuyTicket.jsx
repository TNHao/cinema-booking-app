import React, { useEffect } from 'react'
import './BuyTicket.scss'
import screen from '../../assets/imgs/screen.png'
import { useSelector, useDispatch } from 'react-redux'
import { actGetListTicketRoomApi, datGheAction, actGheDangDat } from '../../redux/actions/QuanLyDatVeActions'
import _ from 'lodash'
import Banner from 'components/Banner/Banner'
import { history } from 'App'
import { Fragment } from 'react'
import Swal from 'sweetalert2'
// import { actGheDangDat, actGetListTicketRoomApi } from 'redux/actions/QuanLyDatVeActions'
import { connection } from 'index'
import { DAT_GHE } from 'redux/Types/QuanLyDatVeTypes'
import { DAT_VE_HOAN_TAT } from 'redux/Types/QuanLyDatVeTypes'

export default function BuyTicket(props) {

    const { listTicketRoom, listGheDangDat, listGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { userLogin } = useSelector(state => state.QuanLyUserReducer)
    const dispatch = useDispatch()

    const { thongTinPhim, danhSachGhe } = listTicketRoom

    // console.log(listGheDangDat)


    // useEffect(() => {
    //     dispatch(actGetListTicketRoomApi(props.match.params.maLichChieu))

    //     connection.on('datVeThanhCong', () => {
    //         dispatch(actGetListTicketRoomApi(props.match.params.maLichChieu))
    //     })


    //     connection.invoke('loadDanhSachGhe', props.match.params.maLichChieu)

    //     // Load danh sách ghế đang đặt từ server về ( luôn luôn lắng nghe ) tự động chạy khi server send cho client
    //     // phương thúc lắng nghe server
    //     connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
    //         console.log('danhSachGheKhachDat', dsGheKhachDat);

    //         // Buoc 1 :  loai minh ra khoi danh sach
    //         dsGheKhachDat = dsGheKhachDat.filter(p => p.taiKhoan !== userLogin.taiKhoan)
    //         // Buoc 2 : gop danh sach ghe khach dat o tat ca user thanh 1 mang chung

    //         console.log(dsGheKhachDat);

    //         let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
    //             let arrGhe = JSON.parse(item.danhSachGhe)
    //             return [...result, ...arrGhe]
    //         }, [])

    //         arrGheKhachDat = _.uniqBy(arrGheKhachDat, 'maGhe')


    //         // dua du lieu ve redux
    //         dispatch({
    //             type: DAT_GHE,
    //             data: arrGheKhachDat
    //         })
    //     })


    //     window.addEventListener('beforeunload', clearGhe)

    //     // return () => {
    //     //     clearGhe();
    //     //     window.removeEventListener('beforeunload', clearGhe)
    //     // }

    //     dispatch({
    //         type : DAT_VE_HOAN_TAT
    //     })
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])




    // const clearGhe = () => {
    //     connection.invoke('huyDat', userLogin.taiKhoan, props.match.params.id)
    // }

    

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : ''
            let gheVIP = ghe.loaiGhe === 'Vip' ? 'gheVIP' : ''


            let gheDangDat = ''
            let count = listGheDangDat.findIndex(p => p.maGhe === ghe.maGhe)
            if (count !== -1) {
                gheDangDat = 'gheDangDat'
            }


            let gheKhachDangDat = ''
            let dem = listGheKhachDat.findIndex(p => p.maGhe === ghe.maGhe)
            if (dem !== -1) {
                gheKhachDangDat = 'gheKhachDangDat'
            }

            let gheDaDuocDat = ''
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                gheDaDuocDat = 'gheDaDuocDat'
            }

            return (
                <Fragment key={index}>
                    <button disabled={ghe.daDat || gheKhachDangDat !== ''} key={ghe.stt} className={`ghe ${gheDaDat} ${gheVIP} ${gheDangDat} ${gheDaDuocDat} ${gheKhachDangDat}`} onClick={() => {
                        dispatch(actGheDangDat(ghe))

                        // const action = datGheAction(ghe, props.match.params.maLichChieu )
                        // // TH : dat ve realTime
                        // dispatch(action)
                    }} >
                        {ghe.daDat ? gheDaDuocDat !== '' ? <i class="fa fa-user-secret text-xl"></i> : <i class="fa fa-times text-xl"></i> : gheKhachDangDat !== '' ? <i class="fa fa-user-lock text-xl"></i> : ghe.tenGhe}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>

            )
        })
    }


    return (
        <div className="buy__ticket">
            <Banner thongTinPhim={thongTinPhim} />
            <div className="buy__ticket-content ">
                <div className="container-lg buy__ticket-seat">
                    <p className="mx-auto text-center">SCREEN</p>
                    <div className="screen">
                        <img className="mx-auto" src={screen} alt="screen" />
                    </div>
                    <div className="seat">
                        <div className="seat__container">
                            {renderGhe()}
                        </div>
                    </div>
                    <div class="type_seat">
                        <table className="w-100 divide-y divide-gray-200">
                            <thead className="bg-gray-50 p-5 text-center">
                                <tr>
                                    <th>Ghe chua dat</th>
                                    <th>Ghe dang dat</th>
                                    <th>Ghe VIP</th>
                                    <th>Ghe cua ban</th>
                                    <th>Ghe nguoi khac dang dat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td><button className="ghe"></button></td>
                                    <td><button className="gheDangDat"></button></td>
                                    <td><button className="gheDaDat"></button></td>
                                    <td><button className="gheDaDuocDat"></button></td>
                                    <td><button className="gheKhachDangDat"></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="buy__ticket-info">
                <div className="container-lg info__seat my-auto">
                    <div className="grid grid-cols-6 md:grid-cols-10 datve">
                        <div className="col-span-3 md:col-span-4 my-auto ml-6">
                            <span>Yout Seats</span>
                            <div className="flex">
                                {listGheDangDat.length === 0 ? <p>Empty</p> : _.sortBy(listGheDangDat, ['stt']).map((item, index) => {
                                    return <p key={index}>{item.tenGhe}, </p>
                                })}</div>
                        </div>
                        <div className="col-span-3 mr-6 md:col-span-4 my-auto">
                            <span>Total Price</span>
                            <p>{listGheDangDat === false ? '$0' : listGheDangDat.reduce((sum, item, index) => {
                                return sum += item.giaVe
                            }, 0).toLocaleString() + "$"}</p>
                        </div>
                        <div className="col-span-6 md:col-span-2 text-center my-auto ">
                            <button onClick={() => {
                                if(listGheDangDat.length){
                                    history.push(`/food/${thongTinPhim.maLichChieu}`)
                                }else{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Error',
                                        text: `You don't choose a seat`
                                    })
                                }
                                
                            }}>NEXT</button>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
        </div>
    )
}


