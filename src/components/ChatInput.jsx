import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addMessage } from 'actions/messages'
import styles from './ChatInput.css'

class ChatInput extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired
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
    return (
      <form className={ styles.form } onSubmit={ this.handleSubmit }>
        <input ref='addMessageInput' type='text' />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {
  addMessage
})(ChatInput)
