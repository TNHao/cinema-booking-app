import React from 'react'
import './Login.scss'
import { ErrorMessage, Formik, withFormik, Form } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { actLogin } from 'redux/Actions/QuanLyUserActions'

function Login(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;


    return (
        <form className="sign-in-htm" onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="taiKhoan" className="label">Username</label>
                <input name="taiKhoan" type="text" className="input" onChange={handleChange} />
                <ErrorMessage name="taiKhoan">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <label htmlFor="matKhau" className="label">Password</label>
                <input name="matKhau" type="password" className="input" data-type="password" onChange={handleChange} />
                <ErrorMessage name="matKhau">{msg => <div className="text-red-600 mt-2">{msg}</div>}</ErrorMessage>
            </div>
            <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
            </div>
            <div className="group">
                <input type="submit" className="button" defaultValue="Sign In" />
            </div>
            <div className="hr" />
            <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
            </div>
        </form>
    )
}

const LoginWithFomik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: '',
        matKhau: ''
    }),
    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string().required("User is required"),
        matKhau: Yup.string().required('Password is required').min(2, 'To Short!').max(18, 'To Long!')
    }),
    handleSubmit: (values, {props, setSubmitting }) => {
        props.dispatch(actLogin(values))
    },
    displayName: 'LoginForm'
})(Login)

export default connect()(LoginWithFomik)
