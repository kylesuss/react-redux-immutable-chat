import { USER_REQUEST, USER_SUCCESS } from 'actions/user'
import { List, Map } from 'immutable'

const initialState = Map({
  store: List([]),
  loading: false
})

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case USER_REQUEST:
      return state.set('loading', true)
    case USER_SUCCESS:
      const notLoadingState = state.set('loading', false)

      return notLoadingState.updateIn(['store'], (store) => {
        return store.push(action.response)
      })
    default:
      return state
  }
}
