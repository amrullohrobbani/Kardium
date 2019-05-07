 export const signIn = ( credentials ) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type : 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type : 'LOGIN_ERROR',err});
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type : 'SIGNOUT_SUCCESS'})
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(( resp ) => {
      return firestore.collection('doctors').doc(resp.user.uid).set({
        str : newUser.str,
        email : newUser.email,
        username : newUser.username
      })
    }).then(()=>{
      dispatch({ type : 'SIGNUP_SUCCESS' })
    }).catch((err) => {
      dispatch({ type : 'SIGNUP_FAILED', err })
    })
  }
}

export const changeProfile = (user) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

      if(user.username !== ''){
        firestore.collection('doctors').doc(user.id).update({username: user.username})
      .then(() => {
        if(user.str !== ''){
          firestore.collection('doctors').doc(user.id).update({str: user.str})
        }
      }).then(()=>{
        dispatch({ type : 'CHANGE_SUCCESS' })
      }).catch((err) => {
        dispatch({ type : 'CHANGE_FAILED', err })
      })
    }
  }
}
