import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChatBox extends Component {
  render () {
    const { messages } = this.props

    return (
      <div>
        {
          messages.map((message) => {
            return (
              <div>{ message.text }</div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(ChatBox)
