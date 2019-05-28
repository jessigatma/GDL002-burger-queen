 import firebase from 'firebase';

 const firebaseConfig = {

    apiKey: "AIzaSyBf2V79ALjboZwY_jWKFaVtMIa68SfgQ3A",
    authDomain: "burgerqueenlab-27204.firebaseapp.com",
    databaseURL: "https://burgerqueenlab-27204.firebaseio.com",
    projectId: "burgerqueenlab-27204",
    storageBucket: "burgerqueenlab-27204.appspot.com",
    messagingSenderId: "740465837276",
    appId: "1:740465837276:web:54cdbfef457cb302"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   export default firebase;