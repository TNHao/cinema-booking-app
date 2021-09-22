import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import './_sidebar.scss';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from 'redux/Types/QuanLyUserTypes';

export default function Sidebar() {
    const dispatch = useDispatch()

    const LogOut = () => {
        dispatch({
            type: LOG_OUT
        });
    };

    const handleClick = () => {
        const ele = document.getElementById('sidebar');

        if (ele.classList.contains('active'))
            ele.classList.remove('active');
        else ele.classList.add('active');
    }

    const { userLogin } = useSelector(state => state.QuanLyUserReducer)
    const param = useParams();

    return (
        <nav id="sidebar" className="active">
            <div className="custom-menu">
                <button type="button" id="sidebarCollapse" className="btn btn-primary mt-3" onClick={handleClick}>
                    <MenuOutlinedIcon />
                </button>
            </div>
            <div className="p-4">
                <div className="admin d-flex justify-content-around align-items-center">
                    {/* I use icon instead of user image */}
                    <AccountCircleOutlinedIcon />
                    <div className='text-left'>
                        <p className="mb-0">{userLogin.taiKhoan}</p>
                        <p className="mb-0">{userLogin.hoTen}</p>
                    </div>
                </div>

                <ul className="list-unstyled components mt-4">
                    <li className={`mb-3 ${param.page === "quan-ly-phim" ? "active" : ""}`}>
                        <Link to="quan-ly-phim" ><span className="fa fa-film mr-3" /> Quản lý phim</Link>
                    </li>
                    <li className={`mb-3 ${param.page === "quan-ly-nguoi-dung" ? "active" : ""}`}>
                        <Link to="quan-ly-nguoi-dung" ><span className="fa fa-user mr-3" /> Quản lý người dùng</Link>
                    </li>
                    <li className={`mb-5 ${param.page === "quan-ly-lich-chieu" ? "active" : ""}`}>
                        <Link to="quan-ly-lich-chieu" ><span className="fa fa-ticket-alt mr-3" /> Quản lý lịch chiếu</Link>
                    </li>
                </ul>

                <div className="logOut-btn text-center">
                    <button className="btn btn-danger" onClick={LogOut}>LOG OUT</button>
                </div>
            </div>
        </nav>
    )
}
