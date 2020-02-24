import { login, getQuestions, getUsers } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { setError } from './error';
import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export const loginUser = ( username, password ) => {
    return async (dispatch) => {
        return await login( username, password )
            .then(( logged ) => {
                if (logged) {
                    dispatch(setError(''));
                    dispatch(showLoading());
                    getQuestions()
                        .then(( questions ) => {
                            dispatch(receiveQuestions(questions));
                            getUsers()
                                .then(( users ) => {
                                    dispatch(receiveUsers(users));
                                    dispatch(setAuthedUser(username));
                                    dispatch(hideLoading());
                                })
                        })
                }
                else {
                    dispatch(setError('Invalid Login'));
                }
            }).catch((err) => {
                dispatch(setError(err));
            });
    }
}