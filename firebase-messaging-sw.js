importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_FIREBASE_DOMAIN_NAME",
    databaseURL: "YOUR_FIREBASE_DATBASE_URL",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET END WITH appspot.com",
    messagingSenderId: "YOUR SENDER ID",
    appId: "YOUR APP ID",
    measurementId: "YOUR MEASUREMENT ID"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});