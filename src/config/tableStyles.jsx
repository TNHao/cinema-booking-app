import DatetimePicker from "components/DatetimePicker/DatetimePicker";

export const filmManagementTableStyle = [
    {
        title: 'Tên phim',
        field: 'tenPhim'
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
        sorting: false,
        searchable: false,
        editable: 'always',
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
                />
            )
        },
        render: row => {
            if (row.moTa.length <= 60) return row.moTa;
            return `${row.moTa.slice(0, 60)}...`;
        },
    },
    {
        title: 'Ngày khởi chiếu',
        field: "ngayKhoiChieu",
        searchable: false,
        editable: 'always',
        editComponent: (props) => {
            return (<DatetimePicker {...props} />)
        },
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
    },
];

export const userManagementTableStyle = [
    {
        title: 'Tài khoản',
        field: 'taiKhoan',
    },
    {
        title: 'Mật khẩu',
        field: 'matKhau',
        sorting: false,
        searchable: false,
    },
    {
        title: 'Họ tên',
        field: 'hoTen',
        searchable: false,
    },
    {
        title: 'Email',
        field: 'email',
        sorting: false,
        searchable: false,
    },
    {
        title: 'Số điện thoại',
        field: "soDt",
        searchable: false,
        sorting: false,
    },
    {
        title: 'Loại người dùng',
        field: "maLoaiNguoiDung",
        searchable: false,
        render: row => {
            let user = row.maLoaiNguoiDung === "KhachHang" ? "Khách hàng" : "Quản trị viên"; 
            return user;
        }
    },
];