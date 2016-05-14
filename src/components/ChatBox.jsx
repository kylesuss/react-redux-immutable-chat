import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addMessage } from 'actions/messages'
import { List } from 'immutable'
import styles from './ChatBox.css'

class ChatBox extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    messages: PropTypes.instanceOf(List).isRequired
  }

  componentDidMount () {
    this.refs.addMessageInput.focus()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { addMessageInput } = this.refs
    const { value } = addMessageInput

    if (value.length > 0) {
      this.props.addMessage(value)
      addMessageInput.value = ''
    }
  }

  render () {
    const { messages } = this.props

    return (
      <div className={ styles.chatBox }>
        {
          messages.map((message, index) => {
            return (
              <div className={ styles.message }
                   key={ `chat-box-message-${index}` }>
                { message.get('text') }
              </div>
            )
          })
        }
        <form className={ styles.form } onSubmit={ this.handleSubmit }>
          <input ref='addMessageInput' type='text' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBox)
