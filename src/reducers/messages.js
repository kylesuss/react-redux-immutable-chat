import { ADD_MESSAGE } from 'actions/messages'
import messagesFixtures from 'fixtures/messages'

const initialState = messagesFixtures || []

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}
