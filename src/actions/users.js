import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToQuestion } from "./questions";

export const GET_USERS = "GET_USERS";
export const ADD_USER_ANSWERS = "ADD_USER_ANSWERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

function addUserAnswers(authUser, qid, answer) {
  return {
    type: ADD_USER_ANSWERS,
    authUser,
    qid,
    answer,
  };
}

export function handleSaveUserAnswers(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(addUserAnswers(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
      console.warn("Save Err: ", e);
    });
  };
}

export function addUserQuestion({ id, author }) {
  return {
    type: ADD_USER_QUESTION,
    id,
    author,
  };
}
