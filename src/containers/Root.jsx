import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import ChatPage from 'layouts/ChatPage'

const store = configureStore()

export default class Root extends Component {
  render () {
    return (
      <Provider store={ store }>
        <ChatPage />
      </Provider>
    )
  }
}
