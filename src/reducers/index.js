import { combineReducers } from 'redux';
import authedUser from './authedUser';
import error from './error';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    error,
    loadingBar: loadingBarReducer,
});