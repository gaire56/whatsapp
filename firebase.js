import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBdC4LV7ewBEYSQYto_Gz2wrUv4l4iy4I0',
  authDomain: 'whatsapp-cb87b.firebaseapp.com',
  databaseURL: 'https://whatsapp-cb87b-default-rtdb.firebaseio.com',
  projectId: 'whatsapp-cb87b',
  storageBucket: 'whatsapp-cb87b.appspot.com',
  messagingSenderId: '526005475957',
  appId: '1:526005475957:web:65f4994fa41d7b8c6bf63c',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
