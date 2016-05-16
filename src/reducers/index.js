import { combineReducers } from 'redux'
import messages from 'reducers/messages'
import user from 'reducers/user'

export default combineReducers({
  messages,
  user
})
