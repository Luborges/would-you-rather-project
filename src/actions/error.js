export const SET_ERROR = 'SET_ERROR';

export function setError (text) {
    return {
        type: SET_ERROR,
        text,
        disconnect: true,
    }
}