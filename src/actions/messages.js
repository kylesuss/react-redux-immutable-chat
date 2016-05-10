export const ADD_MESSAGE = 'ADD_MESSAGE'

export function addMessage (text) {
  return {
    type: ADD_MESSAGE,
    text
  }
}
