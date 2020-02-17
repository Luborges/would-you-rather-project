import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js'
  
  export function login () {
    return Promise.all([
      _getUsers(),
    ]).then(([users, tweets]) => ({
      users,
      tweets,
    }))
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }
  
  export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }

  export function getQuestions (info) {
    return _getQuestions(info)
  }