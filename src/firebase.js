// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as fbauth from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore } from "firebase/firestore"
import { getFunctions, httpsCallable} from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAJHA4g4RJL6b1Dx9V1Qa6WKevHUTHYE7A",
  authDomain: "indiestack-b95c4.firebaseapp.com",
  projectId: "indiestack-b95c4",
  storageBucket: "indiestack-b95c4.appspot.com",
  messagingSenderId: "317786119441",
  appId: "1:317786119441:web:91a25521e1d668443c40b0"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = fbauth.getAuth(app);

export const useAuth = () => useAuthState(auth)

const provider = new fbauth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => fbauth.signInWithPopup(auth, provider);
export const signInWithEmailAndPassword = (email, password) => fbauth.signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmailAndPassword = (email, password) => fbauth.createUserWithEmailAndPassword(auth, email, password);
export const signOut = () => fbauth.signOut(auth);

export const helloWorld = httpsCallable(functions, 'helloWorld');
export default app;