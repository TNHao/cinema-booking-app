import React, { useEffect } from 'react';
import tableIcons from 'config/muiTableIcons';
import { scheduleManagementTableStyle } from 'config/tableStyles';

import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import {
    actFetchAllFilm,
    actFetchAllCineplex,
    actGetAllCinemaByCineplex,
} from 'redux/actions/actMovieSchedule';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

let tableData = [
    {
        tenHeThongRap: 'BHD Star Cineplex',
        logo: 'http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png',
        tenCumRap: 'BHD Star Cineplex - Phạm Hùng',
        tenRap: 'Rạp 1',
        ngayChieuGioChieu: '2021-09-01T07:35:02',
        giaVe: 75000,
    },
    {
        tenHeThongRap: 'BHD Star Cineplex',
        logo: 'http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png',
        tenCumRap: 'BHD Star Cineplex - Phạm Hùng',
        tenRap: 'Rạp 1',
        ngayChieuGioChieu: '2021-09-01T07:35:02',
        giaVe: 75000,
    },
    {
        tenHeThongRap: 'BHD Star Cineplex',
        logo: 'http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png',
        tenCumRap: 'BHD Star Cineplex - Phạm Hùng',
        tenRap: 'Rạp 1',
        ngayChieuGioChieu: '2021-09-01T07:35:02',
        giaVe: 75000,
    },
];
export default function MovieSchedule() {
    /* ------------------------------- mentor code ------------------------------ */

    const dispatch = useDispatch();

    const { dsPhim, dsHeThongRap, dsCumRap } = useSelector((state) => state.movieScheduleReducer);
    const [dsRap, setDsRap] = useState([]);

    const [phimSelected, setPhimSelected] = useState('');
    const [heThongRapSelected, setHeThongRapSelected] = useState('');
    const [cumRapSelected, setCumRapSelected] = useState('');
    const [rapSelected, setRapSelected] = useState('');

    useEffect(() => {
        dispatch(actFetchAllFilm());
        dispatch(actFetchAllCineplex());
    }, []);

    const handleChangeFilm = (event) => {
        setPhimSelected(event.target.value);
    };

    const handleChangeCineplex = (event) => {
        const { value } = event.target;
        dispatch(actGetAllCinemaByCineplex(value));
        setHeThongRapSelected(value);
        setDsRap([]);
        setCumRapSelected('');
        setRapSelected('');
    };

    const handleChangeCinema = (event) => {
        const { value } = event.target;
        const cinemaFind = dsCumRap.find((item) => item.maCumRap === value);
        setCumRapSelected(value);
        setDsRap(cinemaFind.danhSachRap);
        setRapSelected('');
    };
    const handleChangeRoom = (event) => {
        const { value } = event.target;
        setRapSelected(value);
    };

    /* -------------------------------------------------------------------------- */
    return (
        <div className="table mt-5 mb-2">
            <div className="shadow-sm rounded px-5 py-4 mb-2">
                <h2>Quản lý lịch chiếu</h2>
                <div className="row">
                    <div className="col-3">
                        <FormControl fullWidth>
                            <InputLabel id="label-1">Chon phim</InputLabel>
                            <Select
                                label="Chon phim"
                                onChange={handleChangeFilm}
                                labelId="label-1"
                                value={phimSelected}
                            >
                                {dsPhim.map((item, key) => (
                                    <MenuItem value={item.maPhim} key={`phim-${key}`}>
                                        {item.tenPhim}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-3">
                        <FormControl fullWidth>
                            <InputLabel id="label-2">Chon he thong rap</InputLabel>
                            <Select
                                label="Chon he thong rap"
                                onChange={handleChangeCineplex}
                                labelId="label-2"
                                value={heThongRapSelected}
                            >
                                {dsHeThongRap.map((item, key) => (
                                    <MenuItem value={item.maHeThongRap} key={`phim-${key}`}>
                                        {item.tenHeThongRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-3">
                        <FormControl fullWidth>
                            <InputLabel id="label-3">Chon cum rap</InputLabel>
                            <Select
                                label="Chon cum rap"
                                onChange={handleChangeCinema}
                                labelId="label-3"
                                value={cumRapSelected}
                                disabled={dsCumRap.length === 0}
                            >
                                {dsCumRap.map((item, key) => (
                                    <MenuItem value={item.maCumRap} key={`phim-${key}`}>
                                        {item.tenCumRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-3">
                        <FormControl fullWidth>
                            <InputLabel id="label-4">Chon rap</InputLabel>
                            <Select
                                label="Chon rap"
                                onChange={handleChangeRoom}
                                labelId="label-4"
                                value={rapSelected}
                                disabled={dsRap.length === 0}
                            >
                                {dsRap.map((item, key) => (
                                    <MenuItem value={item.tenRap} key={`phim-${key}`}>
                                        {item.maRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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
                    search: false,
                }}
            />
        </div>
    );
}
