import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { addUserAnswer, addUserQuestion, getUsers } from "./users";
import { getQuestions, addQuestion, saveAnswer } from "./questions";
import { setAuthUser } from "./authUser";

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(setAuthUser(AUTH_ID));
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
