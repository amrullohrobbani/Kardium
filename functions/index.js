// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase)
//
// const createNotification = (notification => {
//   return admin.firestore().collection('notification')
//     .add(notification)
//     .then(doc => console.log('notif added', doc));
// })
//
// exports.PatientCreated = functions.firestore
//   .document('patient/{patientID}')
//   .onCreate( doc => {
//     const patient = doc.data();
//     if () {}
//     const notification = {
//       content : 'Added New Patient',
//       user : '${patient.firstName} ${patient.lastName}',
//       time : admin.firestore.fieldValue.serverTimestamp()
//     }
//     return createNotification()
//   })
//

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
