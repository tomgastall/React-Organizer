import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCCEzpBt1Doghpwic6RG-zGtqckEQsdwX4",
    authDomain: "todoist-6b237.firebaseapp.com",
    databaseURL: "https://todoist-6b237.firebaseio.com",
    projectId: "todoist-6b237",
    storageBucket: "todoist-6b237.appspot.com",
    messagingSenderId: "1010182390906",
    appId: "1:1010182390906:web:11d10407f352f4ed1767c3",
});

export { firebaseConfig as firebase };