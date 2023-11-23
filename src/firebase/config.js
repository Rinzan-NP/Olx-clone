import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB00RnIGj7ukfmYQ0Si87tPVb7qJWfG1gs",
  authDomain: "olx-clone-7ab34.firebaseapp.com",
  projectId: "olx-clone-7ab34",
  storageBucket: "olx-clone-7ab34.appspot.com",
  messagingSenderId: "168176478449",
  appId: "1:168176478449:web:b64669086c18e8a562a150",
  measurementId: "G-SFK60QT8Q0"
};

export default firebase.initializeApp(firebaseConfig)