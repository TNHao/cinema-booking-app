import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import MuiRadio from 'components/MuiRadio/MuiRadio';
import Selector from 'components/Selector/Selector';

import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import { Send } from '@material-ui/icons';

import tableIcons from 'config/muiTableIcons';
import { scheduleManagementTableStyle } from 'config/tableStyles';
import { selectorOptions } from 'config/selectorOptions';

import { MovieScheduleApi } from 'apis/adminManagementServices';
import { actSetMovieSelected, actSetTheaterFranchiseSelected, actSetTheaterIdSelected, actSetTheatersSelected } from 'redux/actions/actMovieSchedule';
import { actFetchMovieData, actFetchTheaterFranchises, actFetchTheaters, actSetTheaterId, actSetTheaters } from 'redux/actions/actSelectorData';

import moment from 'moment';

const selectorStyle = {
    formControl: "col-12 col-sm-6 col-lg-3 pr-5",
    inputLabel: "pr-5",
    select: ""
}

const movieScheduleApi = new MovieScheduleApi();

export default function MovieSchedule() {
    const [tableData, setTableData] = useState([]);
    const [tableTitle, setTableTitle] = useState("");
    const [dateTimeSelected, setDateTimeSelected] = useState(moment(new Date()).format("YYYY-MM-DDThh:mm"));

    const { movieSelected, theaterFranchiseSelected, theatersSelected, theaterIdSelected, ticketPrice } = useSelector(state => state.MovieScheduleReducer);
    const { movieList, theaterFranchises, theaters, theaterId } = useSelector(state => state.SelectorDataReducer);

    const movieSelect = new selectorOptions("Chọn phim", { name: 'movie-select', id: 'movie-select' }, movieList, selectorStyle, "maPhim", "tenPhim");
    const theaterFranchiseSelect = new selectorOptions("Chọn hệ thống rạp", { name: 'theater-franchise-select', id: 'theater-franchise-select' }, theaterFranchises, selectorStyle, "maHeThongRap", "tenHeThongRap");
    const theatersSelect = new selectorOptions("Chọn cụm rạp", { name: 'theaters-select', id: 'theaters-select' }, theaters, selectorStyle, "maCumRap", "tenCumRap");
    const theaterIdSelect = new selectorOptions("Chọn rạp", { name: 'theater-id-select', id: 'theater-id-select' }, theaterId, selectorStyle, "maRap", "tenRap");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchMovieData());
        dispatch(actFetchTheaterFranchises());
    }, [dispatch])

    useEffect(() => {
        if (movieSelected) {
            movieScheduleApi.fetchDetailSchedule(movieSelected)
                .then(res => {
                    const dataFiltered = [];
                    const { heThongRapChieu: dsHeThongRap, tenPhim } = res.data.content;

                    dsHeThongRap.forEach(heThongRap => {
                        const { tenHeThongRap, logo, cumRapChieu } = heThongRap;

                        cumRapChieu.forEach(cumRap => {
                            const { tenCumRap, lichChieuPhim } = cumRap;

                            lichChieuPhim.forEach(lichChieu => {
                                const { tenRap, ngayChieuGioChieu, giaVe } = lichChieu;

                                dataFiltered.push({
                                    tenHeThongRap,
                                    logo,
                                    tenCumRap,
                                    tenRap,
                                    ngayChieuGioChieu,
                                    giaVe
                                })
                            })
                        })
                    })

                    setTableData(dataFiltered);
                    setTableTitle(tenPhim);
                });
        }
        else {
            setTableData([]);
            setTableTitle("");
        }
    }, [movieSelected])

    useEffect(() => {
        if (theaterFranchiseSelected)
            dispatch(actFetchTheaters(theaterFranchiseSelected));
        else
            dispatch(actSetTheaters([]));

        // Khi nao he thong rap thay doi thi deu phai set lai danh sach rap
        dispatch(actSetTheaterId([]));
    }, [theaterFranchiseSelected, dispatch])

    useEffect(() => {
        if (theatersSelected) {
            const idx = theaters.findIndex(theater => theater.maCumRap === theatersSelected);
            dispatch(actSetTheaterId(theaters[idx].danhSachRap));
        }
        else
            dispatch(actSetTheaterId([]));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theatersSelected, dispatch])

    const handleClick = async () => {
        let date = new Date(dateTimeSelected);
        date = moment(date).format('DD/MM/yyyy') + " " + moment(date).format('hh:mm:ss');
        const data = { maPhim: movieSelected, ngayChieuGioChieu: date, maRap: theatersSelected, giaVe: ticketPrice };
        await movieScheduleApi.addMovieSchedule(data).then(() => alert('Thêm thành công!'));
    }

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
                        <DatetimePicker label="Ngày giờ chiếu" value={dateTimeSelected} onChange={setDateTimeSelected} />
                    </div>
                    <MuiRadio />
                    <div className="m-auto">
                        <Button
                            variant="outlined"
                            color="primary"
                            endIcon={<Send />}
                            disabled={!movieSelected || !theaterFranchiseSelected || !theatersSelected || !theaterIdSelected}
                            onClick={handleClick}
                        >
                            <b>Tạo lịch chiếu</b>
                        </Button>
                    </div>
                </div>
            </div>

            <MaterialTable
                icons={tableIcons}
                title={<h2 className="m-0">Thông tin lịch chiếu phim {tableTitle}</h2>}
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
