import { combineReducers } from "redux";
import system from './system/reducers';
import person from './auth/reducers';

const RootReducers = combineReducers({
    system,
    person,
});

export default RootReducers;
