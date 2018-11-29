import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
