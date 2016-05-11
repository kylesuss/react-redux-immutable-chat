import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { addMessage } from 'actions/messages'

class ChatBox extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { addMessageInput } = this.refs
    const node = findDOMNode(addMessageInput)

    if (node.value.length > 0) {
      this.props.addMessage(node.value)
      node.value = ''
    }
  }

  render () {
    const { messages } = this.props

    return (
      <div>
        {
          messages.map((message) => {
            return (
              <div key={ message.text }>
                { message.text }
              </div>
            )
          })
        }
        <form onSubmit={ this.handleSubmit }>
          <input ref='addMessageInput' type='text' />
          <input type='submit' />
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
    addMessage: function (message) {
      return dispatch(addMessage(message))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBox)
