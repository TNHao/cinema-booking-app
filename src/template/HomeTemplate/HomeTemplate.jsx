import { Route, Redirect } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { useSelector } from "react-redux"
import { USER_LOGIN } from "utils/constants/SettingSystems"
import BackToTopCom from "components/back-to-top/BackToTop"


export const HomeTemplate = ({ Component , isPrivate, ...restProps }) => {

    const { userLogin } = useSelector(state => state.QuanLyUserReducer)
    if(isPrivate){
        if(localStorage.getItem(USER_LOGIN)){
            console.log('hello');
            return <Route {...restProps} render={(propsRoute) => {
                return(
                    <>
                        <Header/>
                        <Component {...propsRoute} />
                        <Footer/>
                        <BackToTopCom/>
                    </>
                )
            }}>
            </Route>
        }
        return <Redirect to="/home" />      
    }
    return <Route {...restProps} render={(propsRoute) => {
        return(
            <>
                <Header/>
                <Component {...propsRoute} />
                <Footer/>
                <BackToTopCom/>
            </>
        )
    }}>
    </Route>
}