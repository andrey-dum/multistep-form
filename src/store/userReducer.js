const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
  user: {},
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload
      }

      default:
        return state
  }
}


export const setUser = (user) => {
  return {
    type: SET_USER_DATA,
    payload: user
  }
}
