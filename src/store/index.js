import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import reduxSaga from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import CarouselReducer from "redux/Reducers/CarouselReducer/CarouselReducer";
import QuanLyPhimReducer from "redux/Reducers/QuanLyPhimReducer";
import QuanLyRapReducer from "redux/Reducers/QuanLyRapReducer";
import TrailerReducer from "redux/Reducers/CarouselReducer/TrailerReducer";
import QuanLyUserReducer from "redux/Reducers/QuanLyUserReducer";
import QuanLyDatVeReducer from "redux/Reducers/QuanLyDatVeReducer";
import QuanLyFoodReducer from "redux/Reducers/QuanLyFoodReducer";
import LoadingReducer from "redux/Reducers/CarouselReducer/LoadingReducer";



const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    TrailerReducer,
    QuanLyUserReducer,
    QuanLyDatVeReducer,
    QuanLyFoodReducer,
    LoadingReducer
})

const middleWareSaga = reduxSaga()

const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk, middleWareSaga)
)

middleWareSaga.run(rootSaga)

export default store