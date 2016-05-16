import messagesFixtures from 'fixtures/messages'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const MESSAGES_REQUEST = 'MESSAGES_REQUEST'
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS'

export function getMessages () {
  return {
    types: [
      MESSAGES_REQUEST,
      MESSAGES_SUCCESS
    ],
    request: () => {
      /* This would typically make an API request */
      return messagesFixtures
    }
  }
}

/**
 * This would trigger some sort of API request in a real scenario.
 * For simplicity, a simple action is dispatched.
 */
export function addMessage (text) {
  return {
    type: ADD_MESSAGE,
    text
  }
}
