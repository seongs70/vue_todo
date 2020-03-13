import firebase from 'firebase'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyCEnoPP70hbYrM0HWASDPXSHVbMTXcYDgY",
  authDomain: "todos-ec0ea.firebaseapp.com",
  databaseURL: "https://todos-ec0ea.firebaseio.com",
  projectId: "todos-ec0ea",
  storageBucket: "todos-ec0ea.appspot.com",
  messagingSenderId: "686338062538",
  appId: "1:686338062538:web:c82eef61f39ae9448f9c33",
  measurementId: "G-X2GDT3JCCG"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
