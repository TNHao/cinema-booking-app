import React, { useEffect } from 'react';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import MuiRadio from 'components/MuiRadio/MuiRadio';
import Selector from 'components/Selector/Selector';
import Button from '@material-ui/core/Button';
import tableIcons from 'config/muiTableIcons';
import { scheduleManagementTableStyle } from 'config/tableStyles';
import { selectorOptions } from 'config/selectorOptions';
import { actSetMovieSelected, actSetTheaterFranchiseSelected, actSetTheaterIdSelected, actSetTheatersSelected } from 'redux/actions/actMovieSchedule';
import { Send } from '@material-ui/icons';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDetailSchedule, actFetchMovieData, actFetchTheaterFranchises, actFetchTheaters, actSetDetailSchedule, actSetTheaterId, actSetTheaters } from 'redux/actions/actSelectorData';

const selectorStyle = {
    formControl: "col-12 col-sm-6 col-lg-3 pr-5",
    inputLabel: "pr-5",
    select: ""
}

export default function MovieSchedule() {
    const { movieSelected, theaterFranchiseSelected, theatersSelected } = useSelector(state => state.MovieScheduleReducer);
    const { movieList, theaterFranchises, theaters, theaterId, detailSchedule } = useSelector(state => state.SelectorDataReducer);

    const dispatch = useDispatch();

    let tableData = [
        {
            tenHeThongRap: "BHD Star Cineplex",
            logo: "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png",
            tenCumRap: "BHD Star Cineplex - Phạm Hùng",
            tenRap: "Rạp 1",
            ngayChieuGioChieu: "2021-09-01T07:35:02",
            giaVe: 75000,
        },
        {
            tenHeThongRap: "BHD Star Cineplex",
            logo: "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png",
            tenCumRap: "BHD Star Cineplex - Phạm Hùng",
            tenRap: "Rạp 1",
            ngayChieuGioChieu: "2021-09-01T07:35:02",
            giaVe: 75000,
        },
        {
            tenHeThongRap: "BHD Star Cineplex",
            logo: "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png",
            tenCumRap: "BHD Star Cineplex - Phạm Hùng",
            tenRap: "Rạp 1",
            ngayChieuGioChieu: "2021-09-01T07:35:02",
            giaVe: 75000,
        }
    ];

    const movieSelect = new selectorOptions("Chọn phim", { name: 'movie-select', id: 'movie-select' }, movieList, selectorStyle, "maPhim", "tenPhim");
    const theaterFranchiseSelect = new selectorOptions("Chọn hệ thống rạp", { name: 'theater-franchise-select', id: 'theater-franchise-select' }, theaterFranchises, selectorStyle, "maHeThongRap", "tenHeThongRap");
    const theatersSelect = new selectorOptions("Chọn cụm rạp", { name: 'theaters-select', id: 'theaters-select' }, theaters, selectorStyle, "maCumRap", "tenCumRap");
    const theaterIdSelect = new selectorOptions("Chọn rạp", { name: 'theater-id-select', id: 'theater-id-select' }, theaterId, selectorStyle, "maRap", "tenRap");

    useEffect(() => {
        dispatch(actFetchMovieData());

        dispatch(actFetchTheaterFranchises());
    }, [dispatch])

    // useEffect(() => {
    //     console.log(theaters);
    // },[theaters])
    
    // useEffect(() => {
    //     console.log(theaterId);
    // },[theaterId])

    useEffect(() => {
        if (movieSelected) {
            dispatch(actFetchDetailSchedule(movieSelected));

            // const { heThongRapChieu } = detailSchedule;
            // heThongRapChieu.forEach((heThong) => {


            // })
        }
        else {
            dispatch(actSetDetailSchedule({}));
            tableData = [];
        }
    }, [movieSelected])

    useEffect(() => {
        if (theaterFranchiseSelected) {
            dispatch(actFetchTheaters(theaterFranchiseSelected));
        }
        else
            dispatch(actSetTheaters([]));
    }, [theaterFranchiseSelected, dispatch])

    useEffect(() => {
        if (theatersSelected) {
            const idx = theaters.findIndex(theater => theater.maCumRap === theatersSelected);
            console.log(3)
            console.log(theaters[idx].danhSachRap);
            dispatch(actSetTheaterId(theaters[idx].danhSachRap));
        }
        else
            dispatch(actSetTheaterId([]));
    }, [theatersSelected, dispatch])

    console.log("redered!")
    return (
        <div className="table mt-5 mb-2">
            <div className="shadow-sm rounded px-5 py-4 mb-2">
                <h2>Quản lý lịch chiếu</h2>
                <div className="row">
                    <Selector {...movieSelect} action={actSetMovieSelected} />
                    <Selector {...theaterFranchiseSelect} action={actSetTheaterFranchiseSelected} />
                    <Selector {...theatersSelect} action={actSetTheatersSelected} />
                    <Selector {...theaterIdSelect} action={actSetTheaterIdSelected} />
                    <div className="mt-4">
                        <DatetimePicker label="Ngày giờ chiếu" />
                    </div>
                    <MuiRadio />
                    <div className="m-auto">
                        <Button
                            variant="outlined"
                            color="primary"
                            endIcon={<Send />}
                        >
                            <b>Tạo lịch chiếu</b>
                        </Button>
                    </div>
                </div>
            </div>

            <MaterialTable
                icons={tableIcons}
                title={<h2 className="m-0">Thông tin lịch chiếu</h2>}
                columns={scheduleManagementTableStyle}
                data={tableData}
                options={{
                    sorting: true,
                    search: false
                }}
            />
        </div>
    )
}
