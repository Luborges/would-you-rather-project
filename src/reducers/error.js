import { SET_ERROR } from '../actions/error';

export default function error (state = null, action) {
    const actions = {
        [SET_ERROR]: () => {
            return action.text;
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}