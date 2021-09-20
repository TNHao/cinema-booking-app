import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import QuanLyPhimReducer from '../redux/Reducers/QuanLyPhimReducer';
import AdminReducer from '../redux/Reducers/AdminReducer';
import SelectorDataReducer from '../redux/Reducers/SelectorDataReducer';
import movieScheduleReducer from 'redux/Reducers/movieScheduleReducer';

const rootReducer = combineReducers({
    QuanLyPhimReducer,
    AdminReducer,
    movieScheduleReducer,
    SelectorDataReducer,
});

const middleWareSaga = reduxSaga();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk, middleWareSaga),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
    // applyMiddleware(reduxThunk, middleWareSaga)
);

middleWareSaga.run(rootSaga);

export default store;
