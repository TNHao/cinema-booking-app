import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import reduxSaga from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import QuanLyPhimReducer from "../redux/Reducers/QuanLyPhimReducer";
import AdminReducer from '../redux/Reducers/AdminReducer';
import MovieScheduleReducer from '../redux/Reducers/MovieScheduleReducer';
import SelectorDataReducer from '../redux/Reducers/SelectorDataReducer';

const rootReducer = combineReducers({
    QuanLyPhimReducer, 
    AdminReducer,
    MovieScheduleReducer,
    SelectorDataReducer
})

const middleWareSaga = reduxSaga()

const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk, middleWareSaga)
)

middleWareSaga.run(rootSaga)

export default store