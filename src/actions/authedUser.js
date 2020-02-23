export const SET_AUTHOR_USER = 'SET_AUTHED_USER';
export const UNSET_AUTHOR_USER = 'UNSET_AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHOR_USER,
        id,
        disconnect: true,
    }
}

export function unsetAuthedUser (id) {
    return {
        type: UNSET_AUTHOR_USER,
    }
}