export const GET_USERS = 'GET_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function addUserQuestion(authedUser, qid) {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    qid
  }
}

export function addUserAnswer(authedUser, qid, option) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    option
  }
}