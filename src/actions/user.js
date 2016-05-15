import usersFixtures from 'fixtures/users'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'

export function getUser (id) {
  return {
    types: [
      USER_REQUEST,
      USER_SUCCESS
    ],
    request: () => {
      /* This would typically make an API request */
      return usersFixtures.find((user) => user.get('id') === id)
    }
  }
}
