import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getMessages } from 'actions/messages'
import { List } from 'immutable'
import styles from './ChatBox.css'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

class ChatBox extends Component {
  static propTypes = {
    messages: PropTypes.instanceOf(List).isRequired
  }

  componentDidMount () {
    this.props.getMessages()
  }

  render () {
    const { messages } = this.props

    return (
      <div className={ styles.chatBox }>
        {
          messages && messages.map((message, index) => {
            return (
              <ChatMessage message={ message }
                           key={ `chat-message-${index}` } />
            )
          })
        }
        <ChatInput />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, {
  getMessages
})(ChatBox)
