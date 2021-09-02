import MaterialTable from 'material-table';
import React, { useState } from 'react';
import tableIcons from 'config/muiTableIcons';
import { filmManagementTableStyle, userManagementTableStyle } from 'config/tableStyles';
import './_muiTable.scss';

export default function MuiTable() {
    // Fake film data 

    // const [data, setData] = useState([
    //     {
    //         tenPhim: 'Beetlejuice',
    //         trailer: "https://www.youtube.com/embed/u8ZsUivELbs",
    //         hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
    //         moTa: "In the near future",
    //         ngayKhoiChieu: "2021-09-01T12:00:23.02",
    //         danhGia: 10,
    //     },
    //     {
    //         tenPhim: 'aa',
    //         trailer: '1988',
    //         hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
    //         moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
    //         ngayKhoiChieu: "2021-09-01T12:00:23.02",
    //         danhGia: 10,
    //     },
    //     {
    //         tenPhim: 'Beetlejuice',
    //         trailer: '1988',
    //         hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
    //         moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
    //         ngayKhoiChieu: "2021-09-01T12:00:23.02",
    //         danhGia: 10,
    //     },
    //     {
    //         tenPhim: 'Beetlejuice',
    //         trailer: '1988',
    //         hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
    //         moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
    //         ngayKhoiChieu: "2021-09-01T12:00:23.02",
    //         danhGia: 10,
    //     },
    //     {
    //         tenPhim: 'Beetlejuice',
    //         trailer: '1988',
    //         hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
    //         moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
    //         ngayKhoiChieu: "2021-09-01T12:00:23.02",
    //         danhGia: 10,
    //     },
    //     {
    //         tenPhim: 'Beetlejuice',
    //         trailer: '1988',
    //         hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
    //         moTa: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
    //         ngayKhoiChieu: "2021-09-01T12:00:23.02",
    //         danhGia: 10,
    //     },
    // ]);

    // Fake user data
    const [data, setData] = useState([
        {
            "taiKhoan": "123@admin",
            "hoTen": "Nguyễn Tân B",
            "email": "stringgsss@gmail.com",
            "soDt": "120000003467",
            "matKhau": "123@Admin",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "1234",
            "hoTen": "Vũ Duy Anh",
            "email": "qwtw1231sss@gmail.com",
            "soDt": "999999999992",
            "matKhau": "123@qweQ",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "1laanconmeo",
            "hoTen": "PHAN THI MY",
            "email": "phanthimai15796@gmail.com",
            "soDt": "0972655253",
            "matKhau": "123456",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "1lananbe",
            "hoTen": "Huy Hoàng",
            "email": "huyhbba@gmai.com",
            "soDt": "0123123123",
            "matKhau": "12345",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "1ngay",
            "hoTen": "test 123",
            "email": "avb@gmail.com",
            "soDt": "0123123123",
            "matKhau": "12345",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "1ngayffff3",
            "hoTen": "test 123 456",
            "email": "avb23ggg222@gmail.com",
            "soDt": "0123123321",
            "matKhau": "12345",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "á",
            "hoTen": "1",
            "email": "0@gmail.com",
            "soDt": "",
            "matKhau": "1",
            "maLoaiNguoiDung": "QuanTri"
        },
    ]);

    return (
        <MaterialTable
            icons={tableIcons}
            title="Editable Preview"
            columns={userManagementTableStyle}
            data={data}
            options={{
                // Set actions column to the right most
                actionsColumnIndex: 99,
                draggable: false,
                tableLayout: "auto"
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}
