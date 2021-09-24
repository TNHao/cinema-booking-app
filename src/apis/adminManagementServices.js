import baseServices from "services/baseServices";
import { USER_LOGIN } from "utils/constants/SettingSystems"

const baseSevice = new baseServices();

const maNhom = localStorage.getItem(USER_LOGIN) ? JSON.parse(localStorage.getItem(USER_LOGIN)).maNhom : "GP01";

export class UserManagementApi {
    fetchUserList = () => {
        return baseSevice.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`);
    }

    updateUser = (user) => {
        return baseSevice.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user);
    }

    addNewUser = (user) => {
        return baseSevice.post('/api/QuanLyNguoiDung/ThemNguoiDung', user);
    }

    deleteUser = (user) => {
        return baseSevice.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`)
    }
}

export class MovieManagementApi {
    fetchMovieList = () => {
        return baseSevice.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`);
    }

    fetchMovieDetail = (movieId) => {
        return baseSevice.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`);
    }

    updateMovie = (movie) => {
        return baseSevice.post('/api/QuanLyPhim/CapNhatPhimUpload', movie);
    }

    addNewData = (movie) => {
        // console.log(movie)
        // return axios({
        //     url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim",
        //     method: "POST",
        //     data: movie,
        //     headers: {
        //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
        //     },
        // });
        return baseSevice.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, movie);
    }

    deleteData = (movie) => {
        // return axios({
        //     url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movie.maPhim}`,
        //     method: "DELETE",
        //     // access token dùng tạm 
        //     headers: {
        //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
        //     },
        // })
        return baseSevice.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${movie.maPhim}`);
    }

    // fetchPaginationData = (page, pageSize) => {
    //     return axios({
    //         url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
    //         method: "GET"
    //     })
    // }
}

export class MovieScheduleApi {
    addMovieSchedule = (data) => {
        return baseSevice.post('/api/QuanLyDatVe/TaoLichChieu', data);
    }

    fetchDetailSchedule = async (movieId) => {
        return await baseSevice.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    }
}