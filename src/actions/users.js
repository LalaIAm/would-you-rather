export const GET_USERS = 'GET_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_USER = 'ADD_USER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question
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

export function addUser(user) {
  console.log('the new user is: ', user)
  return {
    type: ADD_USER,
    user
  }
}