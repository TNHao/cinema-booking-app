import BuyTicket from "pages/BuyTicket/BuyTicket";
import DetailMovie from "pages/DetailMovie/DetailMovie";
import Food from "pages/Food/Food";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Profile from "pages/Profile/Profile";
import Register from "pages/Register/Register";

export const clientRoutes = [
    {
        path : '/home',
        Component : Home,
        exact : true,
        isPrivate : false
    },
    {
        path : '/profile',
        Component : Profile,
        exact : false,
        isPrivate : true
    },
    {
        path : '/',
        Component : Home,
        exact : true,
        isPrivate : false
    },
    {
        path : '/detail/:idMovie',
        Component : DetailMovie,
        exact : false,
        isPrivate : false
    },
    {
        path : '/buyticket/:maLichChieu',
        Component : BuyTicket,
        exact : false,
        isPrivate : true
    },
    {
        path : '/food/:maLichChieu',
        Component : Food,
        exact : false,
        isPrivate : true
    },
]