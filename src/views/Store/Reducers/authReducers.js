const initState={
  authError : null
}

const authReducers = ( state = {initState}, action ) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error')
        return {
          ...state,
          authError: action.err.message
        }
    case 'LOGIN_SUCCESS' :
      console.log('login success')
        return {
          ...state,
          authError: null
        }
    case 'SIGNOUT_SUCCESS' :
      console.log('logout success')
      return state;
    case 'SIGNUP_SUCCESS' :
      console.log('register success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_FAILED' :
      console.log('register failed')
      return {
        ...state,
        authError: action.err.message
      }
    case 'CHANGE_SUCCESS' :
      console.log('change profile success');
      return state;
    case 'CHANGE_FAILED' :
      console.log('change profile failed', action.err);
      return {
        ...state,
        authError: action.err.message
      }
    default :
      return state;
  }
}

export default authReducers
