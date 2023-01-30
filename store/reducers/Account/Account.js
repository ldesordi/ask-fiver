
import initialState from './initialState'

const xxx = (state = initialState, action) => {
  let py = action.payload

  switch (action.type) {

    case 'GET_ACCOUNT_SESSION':
      return { ...state, account: py }
      break
  }

  return state
}

export default xxx