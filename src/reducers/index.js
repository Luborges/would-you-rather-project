import { combineReducers } from 'redux';
import authedUser from './authedUser';
import questions from './questions';
import error from './error';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    error,
    questions,
    loadingBar: loadingBarReducer,
});