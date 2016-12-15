
export default function reducer(state={
    user: {
      id: null,
      name: null,
      password: null,
    },
    fetching: false,
    fetched: false,
    created: false,
    loggedIn: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "LOGIN_DENY_USER": {
        return {...state, loggedIn: false} 
      }
      case "LOGIN_SUCCESS_USER": {
        return {
          ...state, 
          loggedIn: true, 
          user: action.payload,
        } 
      }
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
      }
      case "SET_USER_PASSWORD": {
        return {
          ...state,
          user: {...state.user, password: action.payload},
        }
      }
      case "CREATE_USER": {
        return {
          ...state,
          user: action.payload,
        }
      }
      case "SIGN_OUT_USER": {
        return {
          ...state,
          user: action.payload,
        }
      }
    }

    return state
}