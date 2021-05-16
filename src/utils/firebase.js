import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWeFlOl_KozHIghqtN3mFUMSpo8d8tDrk",
    authDomain: "bsit3a-ccd48.firebaseapp.com",
    projectId: "bsit3a-ccd48",
    storageBucket: "bsit3a-ccd48.appspot.com",
    messagingSenderId: "455040746909",
    appId: "1:455040746909:web:565d56d8617a6ca01b9b74",
    measurementId: "G-YH24GMLDT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;