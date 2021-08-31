import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import reduxSaga from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import QuanLyPhimReducer from "../redux/Reducers/QuanLyPhimReducer";


const rootReducer = combineReducers({
    QuanLyPhimReducer
})

const middleWareSaga = reduxSaga()

const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk, middleWareSaga)
)

middleWareSaga.run(rootSaga)

export default store