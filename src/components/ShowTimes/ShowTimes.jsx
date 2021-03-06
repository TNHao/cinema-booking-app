import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actGetInfoShowtimesCinema } from 'redux/actions/QuanLyRapActions'
import { Tabs} from 'antd';
import './Showtimes.scss'


const { TabPane } = Tabs;

export default function ShowTimes(props) {


    // const [tabPosition, setTabPosition] = useState('left')
    const tabPosition = 'left'
    
    const { listShowtimesCinema } = useSelector(state => state.QuanLyRapReducer)
    const { listMovieByDate } = useSelector(state => state.QuanLyPhimReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actGetInfoShowtimesCinema())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    return (
        <Tabs tabPosition={tabPosition} style={{height: '1000px', overflow: 'scroll'}} >
            {listShowtimesCinema?.map((item, index) => {
                return (
                    <TabPane tab={<img src={item.logo} className="rounded-full w-12 h-12" alt="logo" />} key={index}>
                        <Tabs tabPosition={tabPosition}>
                            {item.lstCumRap?.map((cumRap, index) => {
                                return (
                                    <TabPane tab={
                                        <div className="flex">
                                            <img src={cumRap.hinhAnh ? cumRap.hinhAnh : `https://picsum.photos/400`} className="w-20 h-20" alt="logo" />
                                            <div className="text-left ml-4">
                                                <h1 className="text-black-900">{cumRap.tenCumRap}</h1>
                                                <p>{cumRap.diaChi.length > 50 ? cumRap.diaChi.substring(1,50) + '...' : cumRap.diaChi}</p>
                                                <p className="text-red-600">Chi tiet</p>
                                            </div>
                                        </div>
                                    } key={index}>
                                        {cumRap.danhSachPhim?.map((phim, index) => {    
                                            return listMovieByDate?.filter(p => p.maPhim === phim.maPhim).map((item, index) => {
                                                return (
                                                    <>
                                                        <div className="my-4 flex" key={index}>
                                                                <img src={phim.hinhAnh} alt="anh" className="w-20 h-20" />
                                                            <div className="ml-10">
                                                                <h3 className="text-xl text-red-400">{phim.tenPhim}</h3>
                                                                <p className="font-bold">{cumRap.diaChi}</p>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                    </>
                                                )
                                            })
                                        })}
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </TabPane>
                )
            })}
        </Tabs>
    )
}
