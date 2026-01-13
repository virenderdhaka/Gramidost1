importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// 🔥 Firebase config (same as HTML)
firebase.initializeApp({
  apiKey: "AIzaSyAJWfNhVo-FMJ-AVZUdVqTaxGlYoCmNuZY",
  authDomain: "gramidost.firebaseapp.com",
  projectId: "gramidost",
  storageBucket: "gramidost.firebasestorage.app",
  messagingSenderId: "1011790665506",
  appId: "1:1011790665506:web:854db0dbe38468851fb77b",
  measurementId: "G-2ZJ4215B7M"
});

const messaging = firebase.messaging();

// 🔔 Background notification (jab website band ho)
messaging.onBackgroundMessage(function(payload) {
  console.log('[SW] Background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // optional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
