import auth from './auth' ;
import errors from './errors' ;
import { combineReducers } from 'redux';

export default combineReducers({
    auth,
    errors
});