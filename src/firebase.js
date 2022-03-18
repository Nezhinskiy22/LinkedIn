import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpInDy1egikH8vHZOyUBAZhZea6d6nNNs",
  authDomain: "linkedin-clone-5607b.firebaseapp.com",
  projectId: "linkedin-clone-5607b",
  storageBucket: "linkedin-clone-5607b.appspot.com",
  messagingSenderId: "851522791470",
  appId: "1:851522791470:web:b972ff22a66c6c84a517bf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
