import { saveQuestion } from '../utils/api';

import { addQuestionToUser, userVote } from './users';

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
        return saveQuestion({
            ...obj,
            author: authedUser,
        }).then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(question.id, authedUser))
        })
    }
}

export function handleVote (option, question) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(vote(option, question, authedUser));
        dispatch(userVote(option, question, authedUser));
    }
}