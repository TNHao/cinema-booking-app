import { Route, Redirect } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { useSelector } from "react-redux"
import { USER_LOGIN } from "utils/constants/SettingSystems"
import BackToTopCom from "components/back-to-top/BackToTop"


export const HomeTemplate = ({ Component, isPrivate, isAdmin, ...restProps }) => {


    if (isPrivate) {
            if(isAdmin){
                return <Route {...restProps} 
                render={(propsRoute) => {
                    return (
                        <>
                        <Header/>
                        <Component {...propsRoute} />
                        </>
                    )
            }}>
            </Route>
            }          

        if (localStorage.getItem(USER_LOGIN)) {
            return <Route {...restProps} render={(propsRoute) => {
                return (
                    <>
                        <Header />
                        <Component {...propsRoute} />
                        <Footer />
                        <BackToTopCom />
                    </>
                )
            }}>
            </Route>
        }

        return <Redirect to="/home" />
    }
    
    return <Route {...restProps} render={(propsRoute) => {
        return (
            <>
                <Header />
                <Component {...propsRoute} />
                <Footer />
                <BackToTopCom />
            </>
        )
    }}>
    </Route>
}