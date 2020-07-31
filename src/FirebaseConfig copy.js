import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyDnFr7LqDKVWJ-G_eAhdts6t4lAtRLjK54",
  authDomain: "sri-bannari-amman-silks.firebaseapp.com",
  databaseURL: "https://sri-bannari-amman-silks.firebaseio.com",
  projectId: "sri-bannari-amman-silks",
  storageBucket: "sri-bannari-amman-silks.appspot.com",
  messagingSenderId: "587437952633",
  appId: "1:587437952633:web:a0a971398fdf3320a30ea8",
  measurementId: "G-DGGE7GGLWB"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default fire