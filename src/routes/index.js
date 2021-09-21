import Dashboard from "pages/admin/dashboard/Dashboard";
import BuyTicket from "pages/BuyTicket/BuyTicket";
import DetailMovie from "pages/DetailMovie/DetailMovie";
import Food from "pages/Food/Food";
import Home from "pages/Home/Home";
import Profile from "pages/Profile/Profile";

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

export const adminRoutes = [
    {
        path : '/admin/:page',
        Component : Dashboard,
        exact : true,
        isPrivate : true
    }
]