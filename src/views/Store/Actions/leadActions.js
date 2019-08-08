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
    let leadI = []
    let leadII = []
    let leadIII = []
    let leadaVF = []
    let leadaVL = []
    let leadaVR = []
    let leadV1 = []
    let leadV2 = []
    let leadV3 = []
    let leadV4 = []
    let leadV5 = []
    let leadV6 = []
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
          // if (i%11 === 0){
            switch (ecg[i].charAt(1)) {
              case 'A':
                  leadI.push({
                    I: ecg[i].slice(2)
                  })
                  break;
              case 'B':
                  leadII.push({
                    II: ecg[i].slice(2)
                  })
                  break;
              case 'C':
                  leadIII.push({
                    III: ecg[i].slice(2)
                  })
                  break;
              case 'D':
                  leadaVL.push({
                    aVL: ecg[i].slice(2)
                  })
                  break;
              case 'E':
                  leadaVR.push({
                    aVR: ecg[i].slice(2)
                    })
                    break;
              case 'F':
                  leadaVF.push({
                    aVF: ecg[i].slice(2)
                    })
                    break;
              case 'G':
                  leadV1.push({
                    V1: ecg[i].slice(2)
                    })
                    break;
              case 'H':
                  leadV2.push({
                    V2: ecg[i].slice(2)
                    })
                    break;
              case 'I':
                  leadV3.push({
                    V3: ecg[i].slice(2)
                    })
                    break;
              case 'J':
                    leadV4.push({
                    V4: ecg[i].slice(2)
                    })
                    break;
              case 'K':
                  leadV5.push({
                    V5: ecg[i].slice(2)
                    })
                    break;
              case 'L':
                  leadV6.push({
                    V6: ecg[i].slice(2)
                    })
                    break;
              default:
                  leadI.push({
                    I: ecg[i].slice(1)
                  })
            }
          // }
        }
      })
      .then((response) => {
      dispatch({ type : 'HANDLELEADSTORAGE_SUCCESS', leadI, leadII, leadIII, leadaVF, leadaVL, leadaVR, leadV1, leadV2, leadV3, leadV4, leadV5, leadV6})
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
