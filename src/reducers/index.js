import { combineReducers } from 'redux'
import authedUser from './authReducer'
import questions from './questionReducer'
import users from './userReducer'

export default combineReducers({
    authedUser,
    questions,
    users
})