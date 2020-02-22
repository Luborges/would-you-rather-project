import { login, getQuestions } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { setError } from './error';
import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveQuestions } from './questions';

export const loginUser = ( username, password ) => {
    return async (dispatch) => {
        return await login( username, password )
            .then(( logged ) => {
                if (logged){
                    dispatch(setError(''));
                    dispatch(showLoading());
                    getQuestions()
                        .then(( questions ) => {
                            dispatch(setAuthedUser(username));
                            dispatch(receiveQuestions(questions));
                            dispatch(hideLoading());
                        })
                }
                else{
                    dispatch(setError('Invalid Login'));
                }
            })
    }
}