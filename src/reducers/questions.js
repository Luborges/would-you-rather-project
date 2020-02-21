import { ADD_QUESTION, RECEIVE_QUESTIONS, VOTE } from '../actions/questions';

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
        },
        [VOTE]: () => {
            console.log({
                ...state,
                ...state.questions,
                ...state.question
            });
            let newAction = action;
            newAction = newAction.questions.optionOne.votes.filter((item) => { return item !== action.authedUser });
            newAction = newAction.questions.optionOne.votes.filter((item) => { return item !== action.authedUser });
            
            if (newAction.questions.optionOne.text===action.option) {
                newAction.questions.optionOne.votes.push(action.authedUser);
            }
            else{
                newAction.questions.optionTwo.votes.push(action.authedUser);
            }
            console.log({
                ...state,
                ...state.questions,
                ...newAction.question
            });
            return {
                ...state,
                ...state.questions,
                ...newAction.question
            }
        },
    }
    if (actions[action.type]) {
        return actions[action.type]();
    }
    return state;
}