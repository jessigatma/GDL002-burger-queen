import * as firebase from 'firebase';

const settings ={timestampsInSnapshots:true};

const config ={
    apiKey:process.env.REACT_APP_API_KEY, "AIzaSyBf2V79ALjboZwY_jWKFaVtMIa68SfgQ3A",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN, "burgerqueenlab-27204.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL, "https://burgerqueenlab-27204.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID, "burgerqueenlab-27204",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET, "burgerqueenlab-27204.appspot.com",
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID, "740465837276",
    appId:process.env.REACT_APP_ID "1:740465837276:web:54cdbfef457cb302"
}

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;