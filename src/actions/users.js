export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const USER_VOTE = 'USER_VOTE';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionToUser (id, authedUser) {
    return {
        type: ADD_QUESTION_TO_USER,
        question: id,
        authedUser
    }
}

export function userVote (option, question, authedUser) {
    return {
        type: USER_VOTE,
        option,
        question,
        authedUser
    }
}