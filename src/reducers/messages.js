import { ADD_MESSAGE } from 'actions/messages'
import messagesFixtures from 'fixtures/messages'
import { List, Map } from 'immutable'

const initialState = messagesFixtures || List([])

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.push(
        Map({
          text: action.text
        })
      )
    default:
      return state
  }
}
