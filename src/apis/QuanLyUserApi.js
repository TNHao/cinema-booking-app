import baseServices from "services/baseServices";




class QuanLyUserApi extends baseServices{

    fetchUserLogin = (userLogin) => {
        return this.post('/api/QuanLyNguoiDung/DangNhap', userLogin)
    }

    fetchUserRegister = (userRegister) => {
        return this.post('/api/QuanLyNguoiDung/DangKy', userRegister)
    }

    fetchTypeUser = () => {
        return this.get('/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
    }

    fetchInfoUserLogin = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    updateUserLogin = (userLoginUpdate) => {
        return this.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', userLoginUpdate)
    }
}

export const quanLyUserApi = new QuanLyUserApi()