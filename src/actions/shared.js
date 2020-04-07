import {
  getInitialData,
  saveQuestionAnswer,
  saveQuestion,
  saveUser,
} from "../utils/api";
import { addUserAnswer, addUserQuestion, getUsers, addUser } from "./users";
import { getQuestions, addQuestion, saveAnswer } from "./questions";
import { setAuthUser } from "./authUser";



export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      
    });
  };
}

export function handleAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(addUserAnswer(authedUser, qid, option));
    dispatch(saveAnswer(authedUser, qid, option));
    return saveQuestionAnswer(authedUser, qid, option).catch((error) =>
      console.warn("Error saving answer :", error)
    );
  };
}

export function handleSaveQuestion(option1, option2) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText: option1,
      optionTwoText: option2,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(question));
    });
  };
}

export function handleNewUser(name, image) {
  return (dispatch) => {
    return saveUser({
      name,
      image,
    })
      .then((user) => {
        dispatch(addUser(user));
        dispatch(setAuthUser(user.id));
      })
      .catch((err) => console.warn("Error creating user: ", err));
  };
}
