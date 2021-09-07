import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import './_sidebar.scss';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const handleClick = () => {
        const ele = document.getElementById('sidebar');

        if (ele.classList.contains('active')) 
            ele.classList.remove('active');
        else ele.classList.add('active');
    }

    const param = useParams();

    return (
        <nav id="sidebar" className="active vh-100">
            <div className="custom-menu">
                <button type="button" id="sidebarCollapse" className="btn btn-primary mt-3" onClick={handleClick}>
                    <MenuOutlinedIcon />
                </button>
            </div>
            <div className="p-4">
                <h1><a href="index.html" className="logo">Portfolic <span>Portfolio Agency</span></a></h1>
                <ul className="list-unstyled components mb-5">
                    <li className={param.page === "quan-ly-phim" ? "active" : ""}>
                        <Link to="quan-ly-phim" ><span className="fa fa-home mr-3" /> Quản lý phim</Link>
                    </li>
                    <li className={param.page === "quan-ly-nguoi-dung" ? "active" : ""}>
                        <Link to="quan-ly-nguoi-dung" ><span className="fa fa-user mr-3" /> Quản lý người dùng</Link>
                    </li>
                    <li className={param.page === "quan-ly-lich-chieu" ? "active" : ""}>
                        <Link to="#" ><span className="fa fa-briefcase mr-3" /> Quản lý lịch chiếu</Link>
                    </li>
                </ul>
            </div>
            <div className="adminAcc text-center mt-5">
                <div className="admin d-flex justify-content-center align-items-center">
                    {/* I use icon instead of user image */}
                    <AccountCircleOutlinedIcon />
                    <p className="my-0 ml-3">Admin name</p>
                </div>
                <div className="logOut-btn mt-3">
                    <button className="btn btn-danger">LOG OUT</button>
                </div>
            </div>
        </nav>
    )
}
