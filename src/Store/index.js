import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from '../Saga';
import { reducer as CommonReducer } from './Common/Reducers'
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    common: CommonReducer,
    // wording:wordingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
