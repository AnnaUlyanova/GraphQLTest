const INITIAL_STATE = {
  users: [
    {
      id: 1,
      name: 'Anna'
    },
    {
      id: 2,
      name: 'Quinn'
    }
  ],
  kudos: [
    {
      id: 1,
      fromId: 1,
      toId: 2,
      content: 'Thanks for helping me with that form',
      timestamp: '2016-02-07-08:30'
    }
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'ACTION_TYPE':
      return newState

    default:
      return state
  }
}

export default reducer
