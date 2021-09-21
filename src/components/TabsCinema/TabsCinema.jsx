import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { actGetListMovieByDate } from 'redux/Actions/QuanLyPhimActions';
const { TabPane } = Tabs;



export default function TabsCinema(props) {

    const { listShowtimes } = props
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actGetListMovieByDate())
    },[])

    console.log(listShowtimes);

    const day = new Date('2022/02/24')
    return (
        <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Lich Chieu" key="1" style={{minHeight: '300px'}}>
                            <Tabs tabPosition={'left'} style={{ padding: '20px' }}>
                                {listShowtimes?.map((rapChieu, index) => {
                                    return (
                                        <TabPane tab={<img src={rapChieu.logo} alt="anh" className="w-20 h-20" />} key={index}>
                                            <Tabs tabPosition={'left'}>
                                                {rapChieu.cumRapChieu?.map((cumRap, index) => {
                                                    return (
                                                        <TabPane tab={
                                                            <div className="flex">
                                                                <img src={cumRap.hinhAnh} className="w-20 h-20" />
                                                                <div className="text-left ml-4">
                                                                    <h1 className="text-black-900">{cumRap.tenCumRap}</h1>
                                                                    <p>{cumRap.diaChi}</p>
                                                                    <p className="text-red-600">Chi tiet</p>
                                                                </div>
                                                            </div>
                                                        } key={index}>
                                                            <div className="grid grid-cols-8 gap-8">
                                                                {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                                    if(moment(lichChieu.ngayChieuGioChieu).format('L') > moment(new Date('03/01/2021')).format('L')){
                                                                        return (
                                                                            <div key={index}>
                                                                                <NavLink to="/" className="text-blue-800">{  moment(lichChieu.ngayChieuGioChieu).format('L')  }</NavLink>
                                                                            </div>
                                                                            
                                                                        )
                                                                    }
                                                                    return ''
                                                                })}
                                                            </div>
                                                        </TabPane>
                                                    )
                                                })}
                                            </Tabs>
                                        </TabPane>
                                    )
                                })}
                            </Tabs>
                        </TabPane>
                        <TabPane tab="Thong Tin" key="2" style={{minHeight: '475px'}}>
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Danh Gia" key="3" style={{minHeight: '475px'}}>
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
    )
}
