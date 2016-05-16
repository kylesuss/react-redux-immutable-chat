import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  ADD_MESSAGE
} from 'actions/messages'
import { currentUserId } from 'fixtures/messages'
import { List, Map } from 'immutable'

const initialState = List([])

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case MESSAGES_REQUEST:
      return state
    case MESSAGES_SUCCESS:
      return state.merge(action.response)
    case ADD_MESSAGE:
      return state.push(
        Map({
          text: action.text,
          userId: currentUserId // Just assume current user since this is a demo
        })
      )
    default:
      return state
  }
}
