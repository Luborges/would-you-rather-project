import { ADD_QUESTION, RECEIVE_QUESTIONS, VOTE } from '../actions/questions';

export default function questions (state = null, action) {
    const actions = {
        [ADD_QUESTION]: () => {
            const { question } = action;
            return {
                ...state,
                ...state.questions,
                [question.id]: question   
            };
        },
        [RECEIVE_QUESTIONS]: () => {
            return {
                ...state,
                ...action.questions
            }
        },
        [VOTE]: () => {
            action.question.optionOne.votes = action.question.optionOne.votes.filter((item) => { return item !== action.authedUser});
            action.question.optionOne.votes = action.question.optionTwo.votes.filter((item) => { return item !== action.authedUser});
            if (action.question.optionOne.text===action.option) {
                action.question.optionOne.votes.push(action.authedUser);
            }
            else{
                action.question.optionTwo.votes.push(action.authedUser);
            }

            return {
                ...state, 
                ...state.questions, 
                ...{[action.question.id]: action.question}
            }
        },
    }
    if (actions[action.type]) {
        return actions[action.type]();
    }
    return state;
}