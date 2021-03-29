import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjqwXqWYnWU3IOAF-CqfmWOWl5ZJbsxQs',
  authDomain: 'whatsapp-c1366.firebaseapp.com',
  projectId: 'whatsapp-c1366',
  storageBucket: 'whatsapp-c1366.appspot.com',
  messagingSenderId: '694629977130',
  appId: '1:694629977130:web:79485daea92fe54816c753',
  measurementId: 'G-KJCF40RWJY',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
