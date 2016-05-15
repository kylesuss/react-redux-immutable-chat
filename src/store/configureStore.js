import rootReducer from 'reducers'
import { createStore, applyMiddleware } from 'redux'
import api from 'middleware/api'

export default function configureStore () {
  return createStore(
    rootReducer,
    applyMiddleware(
      api
    )
  )
}
