import baseServices from "services/baseServices";



class QuanLyRapApi extends baseServices{
    constructor(){
        super()
    }

    fetchListTheater = () => {
        return this.get('/api/QuanLyRap/LayThongTinHeThongRap')
    }

    fetchInfoShowtimes = (idMovie) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`)
    }

    fetchInfoShowtimesCinema = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
    }
}

export const quanLyRapApi = new QuanLyRapApi()