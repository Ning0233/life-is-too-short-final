import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvwpelEmmLRnib9csA2uMmHVQMf4v0R3U',
  authDomain: 'lifes-too-short.firebaseapp.com',
  projectId: 'lifes-too-short',
  storageBucket: 'lifes-too-short.firebasestorage.app',
  messagingSenderId: '235277476472',
  appId: '1:235277476472:web:66f06e5724699fc685038d',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;