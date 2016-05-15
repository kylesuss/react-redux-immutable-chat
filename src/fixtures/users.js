import { List, Map } from 'immutable'

const avatarId = 'react-redux-immutable-chat'

export default List([
  Map({
    id: 1,
    displayName: 'Jake',
    avatar: `https://api.adorable.io/avatars/75/jake@${avatarId}.png`
  }),
  Map({
    id: 2,
    displayName: 'Nd',
    avatar: `https://api.adorable.io/avatars/75/nd@${avatarId}.png`
  })
])
