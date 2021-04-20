import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyB6wlx6l26pc4ed7DPOGGqtgBpKO9GRrtM",
    authDomain: "detector-9cd20.firebaseapp.com",
    projectId: "detector-9cd20",
    storageBucket: "detector-9cd20.appspot.com",
    messagingSenderId: "179240862503",
    appId: "1:179240862503:web:2095de17efb07649959f02"
  };
  // Initialize Firebase
  var firebaseApp =firebase.initializeApp(firebaseConfig);

var db=firebaseApp.firestore();

export  { db } ;