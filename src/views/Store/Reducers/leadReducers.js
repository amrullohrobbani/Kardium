const initState={
  leads: []
}

const leadReducers = ( state = {initState}, action ) => {
  switch (action.type){
    case 'HANDLELEAD_FAILED':
      console.log('handle error', action.err)
        return {
          ...state,
          leads: action.err.message
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
          leadI:action.leadI,
          leadII:action.leadII,
          leadIII:action.leadIII,
          leadaVF:action.leadaVF,
          leadaVL:action.leadaVL,
          leadaVR:action.leadaVR,
          leadV1:action.leadV1,
          leadV2:action.leadV2,
          leadV3:action.leadV3,
          leadV4:action.leadV4,
          leadV5:action.leadV5,
          leadV6:action.leadV6
        }
    case 'UNLOADED' :
      console.log('page unloaded');
        return {
          ...state,
          leadI:[],
          leadII:[],
          leadIII:[],
          leadaVF:[],
          leadaVL:[],
          leadaVR:[],
          leadV1:[],
          leadV2:[],
          leadV3:[],
          leadV4:[],
          leadV5:[],
          leadV6:[]   
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
