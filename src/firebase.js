import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBrR4U_Gha0klE3ACdDz9uh-5G5jCZHcI0",
    authDomain: "event-finder-13ee0.firebaseapp.com",
    databaseURL: "https://event-finder-13ee0.firebaseio.com",
    projectId: "event-finder-13ee0",
    storageBucket: "",
    messagingSenderId: "337593357494"
};

export default firebase.initializeApp(config);