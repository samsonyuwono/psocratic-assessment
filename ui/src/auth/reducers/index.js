import { combineReducers } from 'redux';

import login from './login';
import signup from './signup';
import token from './token';

export default combineReducers({
    login,
    signup//,
//    token
});
