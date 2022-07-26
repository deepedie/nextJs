// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbJt5rtldcmqfvpIf3rS2iVPIESqd-3iQ",
  authDomain: "netflix-clone-c89d4.firebaseapp.com",
  projectId: "netflix-clone-c89d4",
  storageBucket: "netflix-clone-c89d4.appspot.com",
  messagingSenderId: "589470423274",
  appId: "1:589470423274:web:f46c43be232555faf6df93"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }