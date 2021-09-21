import DatetimePicker from "components/DatetimePicker/DatetimePicker";
import ImageUploadBtn from "components/imageUploadBtn/ImageUploadBtn";

export const filmManagementTableStyle = [
    {
        title: 'Tên phim',
        field: 'tenPhim',
        validate: row => !row.tenPhim ? { isValid: false, helperText: 'Tên phim không được trống' } : true
    },
    {
        title: 'Trailer',
        field: 'trailer',
        sorting: false,
        searchable: false,
        editable: 'always',
        render: row => <a href={row.trailer}>Watch on youtube</a>
    },
    {
        title: 'Hình ảnh',
        field: 'hinhAnh',
        sorting: false,
        searchable: false,
        editable: 'always',
        editComponent: () => {
            return <ImageUploadBtn />
        },
        render: row => <img height="70px" width="70px" alt={row.tenPhim} src={row.hinhAnh} />
    },
    {
        title: 'Mô tả',
        field: 'moTa',
        sorting: false,
        searchable: false,
        editable: 'always',
        cellStyle: {
            width: "30%",
            maxWidth: 350
        },
        headerStyle: {
            width: "30%",
            maxWidth: 350
        },
        editComponent: (props) => {
            return (
                <textarea
                    type="text"
                    value={props.value}
                    placeholder="Mô tả"
                    className="w-100"
                    onChange={e => props.onChange(e.target.value)}
                    style={{ 'height': '85px', 'border': '1px solid black' }}
                />
            )
        },
        render: row => {
            if (row.moTa.length <= 60) return row.moTa;
            return `${row.moTa.slice(0, 60)}...`;
        }
    },
    {
        title: 'Ngày khởi chiếu',
        field: "ngayKhoiChieu",
        searchable: false,
        editable: 'always',
        editComponent: (props) => {
            return (<DatetimePicker {...props} />)
        },
        // type: 'datetime'
        render: row => {
            let date = new Date(row.ngayKhoiChieu);
            let dateString = date.toLocaleTimeString().slice(0, 5) + ", " + date.toLocaleDateString();
            return dateString;
        }
    },
    {
        title: 'Đánh giá',
        field: "danhGia",
        align: "center",
        searchable: false,
        validate: row => {
            if (!row.danhGia)
                return { isValid: false, helperText: 'Điểm đánh giá không được trống' };

            const danhGia = Number(row.danhGia);

            if (isNaN(danhGia) || danhGia < 0 || danhGia > 10)
                return { isValid: false, helperText: 'Điểm đánh giá phải từ 0 đến 10' };

            return true;
        }
    },
];

export const userManagementTableStyle = [
    {
        title: 'Tài khoản',
        field: 'taiKhoan',
        validate: row => !row.taiKhoan ? { isValid: false, helperText: 'Tài khoản không được trống' } : true
    },
    {
        title: 'Mật khẩu',
        field: 'matKhau',
        sorting: false,
        searchable: false,
        validate: row => {
            if (!row.matKhau)
                return { isValid: false, helperText: 'Mật khẩu không được trống' };

            if (row.matKhau.length < 6)
                return { isValid: false, helperText: 'Mật khẩu chứa ít nhất 6 kí tự' };

            return true;
        }
    },
    {
        title: 'Họ tên',
        field: 'hoTen',
        searchable: false,
        validate: row => !row.hoTen ? { isValid: false, helperText: 'Họ tên không được trống' } : true
    },
    {
        title: 'Email',
        field: 'email',
        sorting: false,
        searchable: false,
        validate: row => {
            if (!row.email)
                return { isValid: false, helperText: 'Email không được trống' };

            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(String(row.email).toLowerCase()))
                return { isValid: false, helperText: "Email không hợp lệ" };
            return true;
        }
    },
    {
        title: 'Số điện thoại',
        field: "soDt",
        searchable: false,
        sorting: false,
        validate: row => {
            const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

            if (!row.soDt)
                return { isValid: false, helperText: 'Số điện thoại không được trống' };

            if (!vnf_regex.test(String(row.soDt)))
                return { isValid: false, helperText: 'Số điện thoại không hợp lệ' };

            return true;
        }
    },
    {
        title: 'Loại người dùng',
        field: "maLoaiNguoiDung",
        searchable: false,
        lookup: {
            "KhachHang": "Khách hàng",
            "QuanTri": "Quản trị viên"
        },
        render: row => {
            let user = row.maLoaiNguoiDung === "KhachHang" ? "Khách hàng" : "Quản trị viên";
            return user;
        },
        validate: row => {
            if (!row.maLoaiNguoiDung)
                return { isValid: false, helperText: 'Hãy chọn loại người dùng' };

            return true;
        }
    },
];

export const scheduleManagementTableStyle = [
    {
        title: '',
        render: row => <img height="50px" width="50px" alt={row.tenHeThongRap} src={row.logo} />,
        sorting: false
    },
    { title: 'Hệ thống rạp', field: 'tenHeThongRap' },
    { title: 'Cụm rạp', field: 'tenCumRap' },
    { title: 'Rạp', field: 'tenRap' },
    {
        title: 'Ngày chiếu',
        field: "ngayChieuGioChieu",
        searchable: false,
        type: 'datetime'
    },
    { title: 'Giá vé', field: 'giaVe' }
]