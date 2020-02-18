import { login } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { setError } from './error';
//import { showLoading, hideLoading } from 'react-redux-loading';

export function loginUser ( username, password ) {
    return async (dispatch) => {
        return await login( username, password )
            .then(( logged ) => {
                if (logged){
                    dispatch(setError(''));
                    dispatch(setAuthedUser(username));
                }
                else{
                    dispatch(setError('Invalid Login'));
                }
            })
    }
}