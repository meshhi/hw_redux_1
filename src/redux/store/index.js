import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceList'

const reducer = combineReducers(
    {
        serviceList: serviceListReducer
    }
)

const store = createStore(reducer);
export default store;