import { RECEIVE_USERS, ADD_QUESTION_TO_USER, USER_VOTE } from '../actions/users';

export default function users (state = null, action) {
    const actions = {
        [RECEIVE_USERS]: () => {
            return {
                ...state,
                ...action.users
            }
        },
        [ADD_QUESTION_TO_USER]: () => {
            const { question, authedUser } = action;
            state[authedUser].questions.push(question);
            return {
                ...state,
            }
        },
        [USER_VOTE]: () => {
            const { question, authedUser, option } = action;
            state[authedUser].answers = {
                ...state[authedUser].answers,
                [question.id]: question.optionOne.text === option ? 'optionOne' : 'optionTwo',
            };
            
            return {
                ...state
            }
        }
    }
    if (actions[action.type]) {
        return actions[action.type]();
    }
    return state;
}