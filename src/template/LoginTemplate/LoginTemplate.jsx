import { Route } from "react-router-dom"
import './LoginTemplate.scss'

export const LoginTemPlate = (props) => {
    
    const { Component, ...restParams } = props

    return <Route {...restParams} render={(propsRoute) => {
        return (
            <div className="login">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked onClick={() => {
                            propsRoute.history.push("/login")
                        }} /><label htmlFor="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"  onClick={() => {
                            propsRoute.history.push("/register")
                        }} /><label htmlFor="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <Component {...propsRoute} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }}>
    </Route>
}