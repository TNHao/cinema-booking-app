import baseServices from '../services/baseServices'


class CarouselApi extends baseServices {
    constructor() {
        super()
    }
    fetchListBanner = () => {
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
}

export const carouselApi = new CarouselApi