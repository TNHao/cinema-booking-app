const { default: baseServices } = require("services/baseServices");



class QuanLyDatVe extends baseServices{
    constructor(){
        super()
    }

    fetchListTicketRoom = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    fetchDatVe = (thongTinDatVe) => {
        return this.post('/api/QuanLyDatVe/DatVe',thongTinDatVe)
    }
}

export const quanLyDatVe = new QuanLyDatVe()