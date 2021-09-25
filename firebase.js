import firebase from 'firebase';
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBIUXCr9r9r14tubOHNNQ8byKAENvqeyVo",
    authDomain: "nextjs-firebase-26ee7.firebaseapp.com",
    projectId: "nextjs-firebase-26ee7",
    storageBucket: "nextjs-firebase-26ee7.appspot.com",
    messagingSenderId: "690981897206",
    appId: "1:690981897206:web:5af35177740b77f9da3dd7"
};

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();

export { db };