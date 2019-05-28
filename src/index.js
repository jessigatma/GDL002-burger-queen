import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

// const firebaseConfig = {

//     apiKey: "AIzaSyBf2V79ALjboZwY_jWKFaVtMIa68SfgQ3A",
//     authDomain: "burgerqueenlab-27204.firebaseapp.com",
//     databaseURL: "https://burgerqueenlab-27204.firebaseio.com",
//     projectId: "burgerqueenlab-27204",
//     storageBucket: "burgerqueenlab-27204.appspot.com",
//     messagingSenderId: "740465837276",
//     appId: "1:740465837276:web:54cdbfef457cb302"
//   };
//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
