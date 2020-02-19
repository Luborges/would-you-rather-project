import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions (state = null, action) {
    const actions = {
        [ADD_QUESTION]: () => {
            return action.id;
        },
        [RECEIVE_QUESTIONS]: () => {
            return {
                ...state,
                ...action.questions
            }
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}