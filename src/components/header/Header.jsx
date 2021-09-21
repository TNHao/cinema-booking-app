import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN } from 'utils/constants/SettingSystems'
import { history } from 'App'
import logo from '../../assets/imgs/logo.png'
import { LOG_OUT } from 'redux/Types/QuanLyUserTypes'

import './Header.scss'

export default function Header(props) {

    const userName = JSON.parse(localStorage.getItem(USER_LOGIN))
    const { userLogin } = useSelector(state => state.QuanLyUserReducer)
    const dispatch = useDispatch()


    const LogOut = () => {
        dispatch({
            type: LOG_OUT
        });
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <img src={logo} alt="logo" className="navbar-brand cursor-pointer" onClick={() => {
                    history.push('/home')
                }} />
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" /> */}
                    <i className="fa fa-bars navbar-toggler-icon pt-1 text-2xl"></i>
                </button>
                <div className="collapse navbar-collapse justify-end" id="navbarNavDropdown">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item my-auto" activeClassName="active">
                            <i className="fa fa-home py-2 "></i>
                            <NavLink to="/home" className="header-link flex justify-center items-center -mb-0.5 px-10">Home</NavLink>
                        </li>
                        <li className="nav-item my-auto" activeClassName="active">
                            <a href="#contact">
                                <i className="fa fa-phone py-2"></i>
                                <p to="/contact" className="header-link flex justify-center items-center -mb-0.5 px-10 ">Contact</p>
                            </a>                        
                        </li>
                        <li className="nav-item my-auto" activeClassName="active">
                            <a href="#movie">
                                <i class="fa fa-film py-2"></i>
                                <p className="header-link flex justify-center items-center -mb-0.5 px-10 ">Movie</p>
                            </a>                        
                        </li>
                        <li className="nav-item my-auto lg:mr-7">
                            {localStorage.getItem(USER_LOGIN) ?
                                <div className="items-center flex-shrink-0 lg:flex">
                                    <img src="https://picsum.photos/300" alt="anh" width="60px" height="60px" className="rounded-full mx-auto" />
                                    <div className="dropdown">
                                        <a className="btn btn-secondary dropdown-toggle bg-transparent border-transparent" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {userLogin.hoTen}
                                        </a>
                                        <div className="dropdown-menu bg-black" aria-labelledby="dropdownMenuLink" style={{ minWidth: '0' }} >
                                            <NavLink className="dropdown-item " to="/profile">Profile</NavLink>
                                            <NavLink className="dropdown-item " to="/home" onClick={LogOut}>Log out</NavLink>
                                        </div>
                                    </div>
                                </div> : <div className="items-center flex-shrink-0 lg:flex" onClick={() => {
                                    history.push('/login')
                                }}>
                                    <i className="fa fa-user-circle text-5xl text-gray-500 hover:text-white cursor-pointer"></i>
                                    <button className="self-center text-center py-2 px-4 text-white">Sign in</button>
                                </div>}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}




