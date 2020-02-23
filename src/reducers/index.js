import { combineReducers } from 'redux';
import authedUser from './authedUser';
import questions from './questions';
import users from './users';
import error from './error';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    error,
    questions,
    users,
    loadingBar: loadingBarReducer,
});