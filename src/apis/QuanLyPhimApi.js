import baseServices from '../services/baseServices'


class QuanLyPhim extends baseServices{


    fetchListMovie = () => {
        return this.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
    }

    fetchListMoviePagination = (page, pageSize) => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`)
    }

    fetchDetailMovie = (idMovie) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`)
    }

    fetchListMovieByDate = (startDate) => {
        // return this.get(`QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=50&tuNgay=0${month}%2F0${day}%2F${year}`)
        return this.get(`/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=50&tuNgay=${startDate}`)
    }
}

export const quanLyPhim = new QuanLyPhim()