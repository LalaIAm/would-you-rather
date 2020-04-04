import { getInitialData } from "../utils/api";
import { getQuestions } from "./questions";
import { getUsers } from "./users";
import { setAuthUser } from "./authUser";

const authUser = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
      dispatch(setAuthUser(authUser))
    });
  };
}
