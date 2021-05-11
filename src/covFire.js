import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyASbg29-8LtoEmCSMqMXtuYeavdM9uEpaQ",
    authDomain: "covhelpapp.firebaseapp.com",
    projectId: "covhelpapp",
    storageBucket: "covhelpapp.appspot.com",
    messagingSenderId: "979969540230",
    appId: "1:979969540230:web:1d61cc48d1637e5f045107",
    measurementId: "G-RS46XRWTHD"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

app.firestore().enablePersistence({
        synchronizeTabs: true
    })
    .catch(function (err) {
        if (err.code === 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code === 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...

        }
    });



export default app;