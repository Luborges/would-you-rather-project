import { saveQuestion } from '../utils/api';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE = 'VOTE';

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function vote (option, question, authedUser) {
    return {
        type: VOTE,
        option,
        question,
        authedUser
    }
}

export function handleAddQuestion (obj) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        //dispatch(showLoading());
        return saveQuestion({
            ...obj,
            author: authedUser,
        }).then((question) => dispatch(addQuestion(question)))
        //.then(() => dispatch(hideLoading()))
    }
}