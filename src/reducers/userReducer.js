import {
  GET_USERS,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  ADD_USER
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_USER_QUESTION:
      const { question } = action;
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id]),
        },
      };
    case ADD_USER:
      const { user } = action;
      return {
        ...state,
        [user.id]: user
      }
    default:
      return state;
  }
}
