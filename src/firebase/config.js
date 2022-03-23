import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyASAO9GgYlllU67i18xmJJKgGW0CsyL2po",
    authDomain: "thedojosite-d32b1.firebaseapp.com",
    projectId: "thedojosite-d32b1",
    storageBucket: "thedojosite-d32b1.appspot.com",
    messagingSenderId: "417242034066",
    appId: "1:417242034066:web:b7b35bb6a8453ac0d89b4b"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {
    projectFirestore, 
    projectAuth,
    timestamp
}