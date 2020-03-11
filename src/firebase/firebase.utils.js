import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAaQtk2RJfESELQGiomJaajDChqyxSAaBk",
    authDomain: "crown-db197.firebaseapp.com",
    databaseURL: "https://crown-db197.firebaseio.com",
    projectId: "crown-db197",
    storageBucket: "crown-db197.appspot.com",
    messagingSenderId: "824468714724",
    appId: "1:824468714724:web:9e0e82d10633737e87a8f1",
    measurementId: "G-NHMGZR6P0F"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




