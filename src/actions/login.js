import { login } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData ( {email, password} ) {
    return async (dispatch) => {
        dispatch(showLoading());
        return await login(email, password)
            .then(({ users, tweets }) => {
                
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}