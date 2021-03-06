export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}