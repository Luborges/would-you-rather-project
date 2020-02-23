import { SET_AUTHOR_USER } from '../actions/authedUser';
import { UNSET_AUTHOR_USER } from '../actions/authedUser';

export default function users (state = null, action) {
    const actions = {
        [SET_AUTHOR_USER]: () => {
            return action.id;
        },
        [UNSET_AUTHOR_USER]: () => {
            return {};
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}