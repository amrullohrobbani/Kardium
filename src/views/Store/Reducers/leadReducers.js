const initState={
  leads: []
}

const leadReducers = ( state = {initState}, action ) => {
  switch (action.type){
    case 'HANDLELEAD_FAILED':
      console.log('handle error', action.err)
        return {
          ...state,
          lead: action.err.message
        }
    case 'HANDLELEAD_SUCCESS' :
      console.log('handle success',action)
        return {
          ...state,
          leads: action.ecg
        }
    case 'HANDLELEADSTORAGE_SUCCESS' :
      console.log('handle success',action)
        return {
          ...state,
          leads: action.ekg
        }
    case 'UNLOADED' :
      console.log('page unloaded');
        return {
          ...state,
          leads: []
        }
    case 'CHANGE_PIN_STATUS' :
      console.log('pin status changed');
        return state
    case 'CHANGE_PIN_FAILED' :
      console.log('failed', action.err.message);
        return state;
    default :
      return state;
  }
}

export default leadReducers
