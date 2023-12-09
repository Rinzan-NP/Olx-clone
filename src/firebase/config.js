import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh03jxbkC3n_TU0UHTiGZcckij9imvsUA",
  authDomain: "olx-clone-f7a13.firebaseapp.com",
  projectId: "olx-clone-f7a13",
  storageBucket: "olx-clone-f7a13.appspot.com",
  messagingSenderId: "7641689480",
  appId: "1:7641689480:web:58ace8e8197b84ec6e1e3d",
  measurementId: "G-LL0KT5NVET"
};

export default firebase.initializeApp(firebaseConfig)