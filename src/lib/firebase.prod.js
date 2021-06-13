import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// Seed Database

// Configuration
const config = {
    apiKey: 'AIzaSyAtY8RN1vsp_3yEA1z8X6JUh4UbL1QtghI',
    authDomain: 'netflix-clone-5e128.firebaseapp.com',
    projectId: 'netflix-clone-5e128',
    storageBucket: 'netflix-clone-5e128.appspot.com',
    messagingSenderId: '379343288212',
    appId: '1:379343288212:web:5b8d9b5ff3bf8bee5fc181',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
