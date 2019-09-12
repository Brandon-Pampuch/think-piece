import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA22HNDSmW-RVzYLVEtaK4k2QJ1SeQaL94",
    authDomain: "think-piece-live-d1cc3.firebaseapp.com",
    databaseURL: "https://think-piece-live-d1cc3.firebaseio.com",
    projectId: "think-piece-live-d1cc3",
    storageBucket: "",
    messagingSenderId: "1046632898504",
    appId: "1:1046632898504:web:60360dcc7d58dec0a9aafd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;