export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE = 'VOTE';

export function addQuestion (id) {
    return {
        type: ADD_QUESTION,
        id,
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