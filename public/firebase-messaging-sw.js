importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

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


let messaging = null;
if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging()

    messaging.onBackgroundMessage(function (payload) {
        console.log(payload);
        // console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        const title = payload.data.title;
        const options = {
            body: payload.data.body,
            data: {
                url: payload.data.url
            },
            actions: [{
                action: "open_url",
                title: "Open covhelp"
            }]
            // icon: payload.notification.icon
        }
        return self.registration.showNotification(title, options);
    });

    self.addEventListener('notificationclick', function (event) {

        switch (event.action) {
            case 'open_url':
                clients.openWindow(event.notification.data.url); //which we got from above
                break;
            case 'any_other_action':
                clients.openWindow("https://www.example.com");
                break;
        }
    }, false);
} else {
    console.log('back notifications not supported')
}