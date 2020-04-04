import { combineReducers } from 'redux'
import authUser from './authReducer'
import questions from './questionReducer'
import users from './userReducer'

export default combineReducers({
    authUser,
    questions,
    users
})