import {
  _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js'
  
  export function login (username, pass) {
    return Promise.all([
      _getUsers(username),
    ]).then(([users]) => {
      if (users.password===pass) {
        return true;
      }
      return false;      
    })
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