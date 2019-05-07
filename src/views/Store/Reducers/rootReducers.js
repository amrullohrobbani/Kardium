import authReducers from './authReducers'
import leadReducers from './leadReducers'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducers = combineReducers ({
  auth : authReducers,
  lead : leadReducers,
  firestore : firestoreReducer,
  firebase : firebaseReducer,
})

export default rootReducers;
