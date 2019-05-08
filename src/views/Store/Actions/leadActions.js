export const handleLeads = (changeEvent) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    let ref = firebase.ref().child(changeEvent)
    let ecg = [];
    console.log(ref)
    ref.once('value', (snap) => {
      let leads = snap.val();
      let i=0;
        for (let key in leads ) {
          if (i%10 !== 0){
            i++;
          } else {
          ecg.push({
            Time: leads[key].Time,
            I: leads[key].I,
            II: leads[key].II,
            III: leads[key].III,
            aVL: leads[key].aVL,
            aVR: leads[key].aVR,
            aVF: leads[key].aVF,
            V1: leads[key].V1,
            V2: leads[key].V2,
            V3: leads[key].V3,
            V4: leads[key].V4,
            V5: leads[key].V5,
            V6: leads[key].V6,
          })
          i++;
          }
        }
        console.log(ecg)
      }
    ).then(()=>{
      dispatch({ type : 'HANDLELEAD_SUCCESS', changeEvent, ecg })
    }).catch((err) => {
      dispatch({ type : 'HANDLELEAD_FAILED', err })
    })
  }
}

export const handleLeadsStorage = (changeEvent) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    let link = changeEvent + ".txt"
    let ekg = []
    let data = ''
    let ecg = []
    let ref = firebase.storage()
      .ref()
      .child(link)
      .getDownloadURL()
      .then((url) => fetch(url)
      .then((response) => response.text())
      .then((response) => data = response)
      .then((response) =>
        ecg = response.split("\n")))
      .then((response) => {
        let x = response.length;
        for (let i = 0; i < x ; i++) {
          if (i%10 === 0){
            switch (ecg[i].charAt(1)) {
              case 'A':
                  ekg.push({
                    I: ecg[i].slice(2)
                  })
                  break;
              case 'B':
                  ekg.push({
                    II: ecg[i].slice(2)
                  })
                  break;
              case 'C':
                  ekg.push({
                    III: ecg[i].slice(2)
                  })
                  break;
              case 'D':
                  ekg.push({
                    aVL: ecg[i].slice(2)
                  })
                  break;
              case 'E':
                  ekg.push({
                    aVR: ecg[i].slice(2)
                    })
                    break;
              case 'F':
                  ekg.push({
                    aVF: ecg[i].slice(2)
                    })
                    break;
              case 'G':
                  ekg.push({
                    V1: ecg[i].slice(2)
                    })
                    break;
              case 'H':
                  ekg.push({
                    V2: ecg[i].slice(2)
                    })
                    break;
              case 'I':
                  ekg.push({
                    V3: ecg[i].slice(2)
                    })
                    break;
              case 'J':
                    ekg.push({
                    V4: ecg[i].slice(2)
                    })
                    break;
              case 'K':
                  ekg.push({
                    V5: ecg[i].slice(2)
                    })
                    break;
              case 'L':
                  ekg.push({
                    V6: ecg[i].slice(2)
                    })
                    break;
            }
          }
        }
      })
      .then((response) => {
      dispatch({ type : 'HANDLELEADSTORAGE_SUCCESS', ekg})
    }).catch((err) => {
      dispatch({ type : 'HANDLELEAD_FAILED', err })
    })
  }
}

export const pinnedStatus = (event) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    console.log(event.pinned);
    if (event.pinned === true){
      firestore.collection('patients').doc(event.id).update({
        pinned:true
      }).then(()=> {
        dispatch({ type : 'CHANGE_PIN_STATUS'})
      }).catch((err) => {
        dispatch({ type : 'CHANGE_PIN_FAILED', err })
      })
    } else {
      firestore.collection('patients').doc(event.id).update({
        pinned:false
      }).then(()=> {
        dispatch({ type : 'CHANGE_PIN_STATUS'})
      }).catch((err) => {
        dispatch({ type : 'CHANGE_PIN_FAILED', err })
      })
    }
  }
}
