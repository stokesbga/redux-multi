/**
 * Redux dispatch multiple actions
 */

function multiMiddlewear ({dispatch}) {
  return next => action =>
    Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action)
}

/**
 * Exports
 */

export default multiMiddlewear
