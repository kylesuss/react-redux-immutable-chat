export default function ({ dispatch }) {
  return next => action => {
    const { types, request } = action

    if (!types) {
      return next(action)
    }

    const [ requestType, successType ] = types

    /**
     * Given that the fixtures are not asnyc and will always work, just dispatch
     * the request and success actions together. Normally this would await api
     * responses and dispatch the appropriate success / failure actions.
     */
    dispatch({
      type: requestType
    })

    const response = request()

    dispatch({
      type: successType,
      response
    })
  }
}
