import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyA0GKZ8fmq91G6JTYGU8AEeglsm3WFAcko",
  authDomain: "vue-auth-firebase-466b2.firebaseapp.com",
  databaseURL: "https://vue-auth-firebase-466b2.firebaseio.com",
  projectId: "vue-auth-firebase-466b2",
  storageBucket: "vue-auth-firebase-466b2.appspot.com",
  messagingSenderId: "654139907214"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
