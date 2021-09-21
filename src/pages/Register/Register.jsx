import { withFormik, ErrorMessage } from 'formik'
import React from 'react'
import './Register.scss'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { actRegister } from 'redux/actions/QuanLyUserActions'

function Register(props) {

    const {
        handleChange,
        handleSubmit,
    } = props;


    return (
        <form className="sign-up-htm" onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="user" className="label">Account</label>
                <input name="taiKhoan" type="text" className="input" onChange={handleChange} />
                <ErrorMessage name="taiKhoan">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <label htmlFor="matKhau" className="label">Password</label>
                <input name="matKhau" type="password" className="input" data-type="password" onChange={handleChange} />
                <ErrorMessage name="matKhau">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <label htmlFor="email" className="label">Email Address</label>
                <input name="email" type="text" className="input" onChange={handleChange} />
                <ErrorMessage name="email">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <label htmlFor="soDt" className="label">Telephone Number</label>
                <input name="soDt" type="text" className="input" onChange={handleChange} />
                <ErrorMessage name="soDt">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <label htmlFor="hoTen" className="label">UserName</label>
                <input name="hoTen" type="text" className="input" onChange={handleChange} />
                <ErrorMessage name="hoTen">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <input type="submit" className="button" defaultValue="Sign Up" />
            </div>
            <div className="hr" />
            <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
            </div>
        </form>
    )
}


const registerWithFomik = withFormik({
    mapPropsToValues : () => ({
        taiKhoan : '',
        matKhau : '',
        email : '',
        soDt : '',
        hoTen : ''
    }),
    validationSchema : Yup.object().shape({
        taiKhoan : Yup.string().required('Account is required').min(6, 'To Short').max(20, 'To Long'),
        matKhau : Yup.string().required('Password is requires').min(6, 'To Short').max(16, 'To Long'),
        email : Yup.string().email('The information is not compatible').required('Email is required'),
        soDt : Yup.number('The number must be a number, not a character').required('TelePhone Number is required'),
        hoTen : Yup.string().required(' Username is required').max(20, 'To Long').min(1, 'To Short')
    }),
    handleSubmit : ( values, {props, setSubmitting } ) => {
        props.dispatch(actRegister(values))
    },
    displayName : 'RegisterForm'
})(Register)

export default connect()(registerWithFomik)
