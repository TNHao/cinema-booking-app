import React, { useEffect, useState } from 'react'
import './Banner.scss'
import { history } from 'App'
export default function Banner(props) {
    const { thongTinPhim } = props

    const [time, setTime] = useState(90)
    // useEffect(() => {
    //     time > 0 && setTimeout(() => {
    //         setTime(time - 1)
    //     }, 1000)
    //     if (time === 0) {
    //         Swal.fire({
    //             title: 'Da qua thoi gian chon ve vui long chon lai',
    //             showClass: {
    //                 popup: 'animate__animated animate__fadeInDown'
    //             },
    //             hideClass: {
    //                 popup: 'animate__animated animate__fadeOutUp'
    //             }
    //         }).then(() => {
    //             window.location.reload();
    //         })

    //     }
    // }, [time])
    return (
        <>
            <div className="buy__ticket-header">
                <div className="overlay"></div>
                <div className="info_content">
                    <span>{thongTinPhim?.tenPhim}</span>
                    <p className="text-3xl text-green-500">{thongTinPhim?.tenRap}</p>
                </div>
            </div>
            <div className="buy__ticket-countdown">
                <div className="container-lg grid grid-cols-2 sm:grid-cols-5 py-3">
                    <div className="flex items-end mx-auto sm:my-auto">
                        <button onClick={() => {
                            history.goBack()
                        }}>BACK</button>
                    </div>
                    <div className="text-center sm:col-span-3 mx-auto my-auto">
                        <span className="text-2xl text-white sm:mr-4">{thongTinPhim?.ngayChieu}</span>
                        <button>{thongTinPhim?.gioChieu}</button>
                    </div>
                    <div className="mx-auto my-auto text-center col-span-2 sm:col-span-1">
                        <span className="time">{time}</span>
                        <p className="text-2xl text-white ml-2">Seconds Left</p>
                    </div>
                </div>
            </div>
        </>
    )
}
