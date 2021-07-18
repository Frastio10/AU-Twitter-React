import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyByBOXCWR_OFN9oJTKP-p7eQVHLP5RVxkM',
  authDomain: 'au-twitter-2607.firebaseapp.com',
  projectId: 'au-twitter-2607',
  storageBucket: 'au-twitter-2607.appspot.com',
  messagingSenderId: '485849046799',
  appId: '1:485849046799:web:c4651cf4fce3b69001687a',
  measurementId: 'G-475B2G370F'
}

if (firebase.apps.length <= 0) firebase.initializeApp(firebaseConfig)
