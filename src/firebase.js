import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAw6-mNM5YOoOH75J8owSSn2MX8bBg1Jos",
    authDomain: "linkedin-clone-f5260.firebaseapp.com",
    projectId: "linkedin-clone-f5260",
    storageBucket: "linkedin-clone-f5260.appspot.com",
    messagingSenderId: "937168854150",
    appId: "1:937168854150:web:99d7654a724b6f32cd0507"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }