import React, { useEffect } from 'react'
import './Profile.scss'
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { actGetInFoUserLogin, actGetTypeUser, actUpdateUserLogin } from 'redux/actions/QuanLyUserActions';
import { withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import moment from 'moment';
import { connect } from 'react-redux'


const { TabPane } = Tabs;

function Profile(props) {

    const { typeUser, infoUserLogin } = useSelector(state => state.QuanLyUserReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetTypeUser())
        dispatch(actGetInFoUserLogin())
    }, [dispatch])

    const { thongTinDatVe } = infoUserLogin


    const callback = () => {
    }


    const {
        values,
        handleChange,
        handleSubmit,
    } = props;

    console.log(values);


    return (
        <div className="profile" style={{backgroundColor : 'rgb(29, 29, 43)', paddingBottom:'5rem'}}>
            <div className="container-lg" style={{ paddingTop: '15rem' }}>
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
                                    <div className="mt-3">
                                        <h4>{infoUserLogin?.hoTen}</h4>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><i className="fa fa-user-secret pr-2"></i>User name</h6>
                                        <span className="text-secondary">{infoUserLogin?.hoTen}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><i className="fa fa-at pr-2"></i>Gmail</h6>
                                        <span className="text-secondary">{infoUserLogin?.email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><i className="fa fa-phone pr-2"></i>Telephone Number</h6>
                                        <span className="text-secondary">{infoUserLogin?.soDT}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Loại người dùng</h6>
                                        <span className="text-secondary">{values.maLoaiNguoiDung}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <Tabs defaultActiveKey="1" onChange={callback} centered>
                                <TabPane tab="Home" key="1">
                                    <div className="outer-wrapper">
                                        <div className="s-wrap s-type-1" role="slider" aria-valuenow="">
                                            <input type="radio" id="s-1" name="slider-control" defaultChecked="checked" />
                                            <input type="radio" id="s-2" name="slider-control" />
                                            <input type="radio" id="s-3" name="slider-control" />
                                            <input type="radio" id="s-4" name="slider-control" />
                                            <input type="radio" id="s-5" name="slider-control" />
                                            <ul className="s-content">
                                                <li className="s-item s-item-1" />
                                                <li className="s-item s-item-2" />
                                                <li className="s-item s-item-3" />
                                                <li className="s-item s-item-4" />
                                                <li className="s-item s-item-5" />
                                            </ul>
                                            <div className="s-control">
                                                <label className="s-c-1" htmlFor="s-1" />
                                                <label className="s-c-2" htmlFor="s-2" />
                                                <label className="s-c-3" htmlFor="s-3" />
                                                <label className="s-c-4" htmlFor="s-4" />
                                                <label className="s-c-5" htmlFor="s-5" />
                                            </div>
                                            <div className="s-nav">
                                                <label className="s-nav-1 right" htmlFor="s-2" />
                                                <label className="s-nav-2 left" htmlFor="s-1" />
                                                <label className="s-nav-2 right" htmlFor="s-3" />
                                                <label className="s-nav-3 left" htmlFor="s-2" />
                                                <label className="s-nav-3 right" htmlFor="s-4" />
                                                <label className="s-nav-4 left" htmlFor="s-3" />
                                                <label className="s-nav-4 right" htmlFor="s-5" />
                                                <label className="s-nav-5 left" htmlFor="s-4" />
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Edit profile" key="2">
                                    <form className="card-body" onSubmit={handleSubmit} >
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Tài khoản</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input name="taiKhoan" type="text" value={values.taiKhoan} className="form-control" onChange={handleChange} />
                                                <ErrorMessage name="taiKhoan">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Mật khẩu</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input name="matKhau" type="text" value={values.matKhau} className="form-control" onChange={handleChange} />
                                                <ErrorMessage name="matKhau">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input name="email" type="text" value={values.email} className="form-control" onChange={handleChange} />
                                                <ErrorMessage name="email">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">SĐT</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input name="soDT" type="text" value={values.soDT} className="form-control" onChange={handleChange} />
                                                <ErrorMessage name="soDT">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Nhóm</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <select disabled className="form-control">
                                                    <option value='GP00'>GP00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Loại người dùng</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <select name="maLoaiNguoiDung" value={values.maLoaiNguoiDung} className="form-control" onChange={handleChange} >
                                                    {typeUser?.map((item, index) => {
                                                        return <option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Họ tên</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input name="hoTen" type="text" value={values.hoTen} className="form-control" onChange={handleChange} />
                                                <ErrorMessage name="hoTen">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3" />
                                            <div className="col-sm-9 text-secondary text-center">
                                                <button type="submit" className="btn btn-danger">Save Change</button>
                                            </div>
                                        </div>
                                    </form>
                                </TabPane>
                                <TabPane tab="History Ticket" key="3">
                                    <div className="history__ticket">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">Mã Vé</th>
                                                    <th scope="col">Tên Phim</th>
                                                    <th scope="col">Thời gian đặt</th>
                                                    <th scope="col">Số ghế</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {thongTinDatVe?.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{item.maVe}</th>
                                                            <td>{item.tenPhim}</td>
                                                            <td>{moment(item.ngayDat).format('L')} - {moment(item.ngayDat).format('LT')}</td>
                                                            <td className="flex">{item?.danhSachGhe.map((ghe, index) => {
                                                                return <p key={index}>{ghe.tenGhe + ","}</p>
                                                            })}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

const ProfileWithFormik = withFormik({
    enableReinitialize : true,
    mapPropsToValues: (props) => {
        let { infoUserLogin, userLogin } = props

        return {
            taiKhoan: infoUserLogin.taiKhoan,
            matKhau: infoUserLogin.matKhau,
            hoTen: infoUserLogin.hoTen,
            email: infoUserLogin.email,
            soDT: infoUserLogin.soDT,
            maNhom: infoUserLogin.maNhom,
            maLoaiNguoiDung: userLogin.maLoaiNguoiDung
        }
    },
    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string().required('Account is required').min(1, 'To Short').max(20, 'To Long'),
        matKhau: Yup.string().required('Password is requires').min(1, 'To Short').max(16, 'To Long'),
        email: Yup.string().email('The information is not compatible').required('Email is required'),
        soDT: Yup.number('The number must be a number, not a character').required('TelePhone Number is required').min(9, 'Min'),
        hoTen: Yup.string().required(' Username is required').max(20, 'To Long').min(1, 'To Short')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(actUpdateUserLogin(values))
    },
    displayName: 'Profile Form'
})(Profile)

const mapStateToProps = state => ({
    infoUserLogin: state.QuanLyUserReducer.infoUserLogin,
    userLogin: state.QuanLyUserReducer.userLogin
})

export default connect(mapStateToProps)(ProfileWithFormik)