const functions = require('firebase-functions');
const moment = require('moment');
const admin = require('firebase-admin');
var firebase = admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.soilmakers = functions.https.onRequest((req, res) =>{
  //var soilmakersRef = firebase.database().ref('soilmakers');
  return admin.database().ref('soilmakers').once('value', (snapshot) => {
    var event = snapshot.val();
    res.status(200).json(event);
  })

})
exports.date = functions.https.onRequest((req, res) => {
  const date = moment.format();
  res.status(200).json({ date: date });
})
