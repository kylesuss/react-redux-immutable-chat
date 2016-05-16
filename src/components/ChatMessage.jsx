import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getUser } from 'actions/user'
import { Map } from 'immutable'
import styles from './ChatMessage.css'

class ChatMessage extends Component {
  static propTypes = {
    message: PropTypes.instanceOf(Map).isRequired,
    getUser: PropTypes.func.isRequired
  }

  componentDidMount () {
    const userId = this.props.message.get('userId')
    this.props.getUser(userId)
  }

  render () {
    const { userStore, message } = this.props
    const user = userStore.find((user) => {
      return user.get('id') === message.get('userId')
    })

    return (
      <div>
        {
          user &&
          <div className={ styles.message }>
            <img className={ styles.avatar }
                 src={ user.get('avatar') } />
            { message.get('text') }
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userStore: state.user.get('store')
  }
}

export default connect(mapStateToProps, {
  getUser
})(ChatMessage)
