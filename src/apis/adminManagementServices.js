import axios from "axios";

export class UserManagementApi {
    fetchData = () => {
        return axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
            method: "GET"
        })
    }

    updateData = (user) => {
        return axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            method: "POST",
            data: user,
            // access token dùng tạm 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
            },
        });
    }

    addNewData = (user) => {
        return axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            method: "POST",
            data: user,
            // access token dùng tạm 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
            },
        })
    }

    deleteData = (user) => {
        return axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,
            method: "DELETE",
            // access token dùng tạm 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
            },
        })
    }

    fetchPaginationData = (page, pageSize) => {
        return axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
            method: "GET"
        })
    }
}

export class MovieManagementApi {
    fetchData = () => {
        return axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET"
        })
    }

    fetchMovieDetail = (movieId) => {
        return axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
            method: "GET",
        })
    }

    updateData = (movie) => {
        return axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/CapNhatPhimUpload",
            method: "POST",
            data: movie,
            // access token dùng tạm 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
            },
        });
    }

    addNewData = (movie) => {
        // return new Promise((resolve, reject) => {resolve()})
        console.log(movie)
        return axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim",
            method: "POST",
            data: movie,
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
            },
        });
    }

    deleteData = (movie) => {
        return axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movie.maPhim}`,
            method: "DELETE",
            // access token dùng tạm 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3dHcxMjMxc3NzQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwicXd0dzEyMzFzc3NAZ21haWwuY29tIiwiR1AwMSJdLCJuYmYiOjE2MzEwMTY5NTYsImV4cCI6MTYzMTAyMDU1Nn0.I5tDI56fEX05yQhVXrUA3e2KWjm0h1WfsZ48pSoRlcc",
            },
        })
    }

    fetchPaginationData = (page, pageSize) => {
        return axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
            method: "GET"
        })
    }
}