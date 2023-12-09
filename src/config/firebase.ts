// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB0t9rYks02xNQKslPe4KG10un9fsNy4pI',
    authDomain: 'todoapp-cce86.firebaseapp.com',
    projectId: 'todoapp-cce86',
    storageBucket: 'todoapp-cce86.appspot.com',
    messagingSenderId: '391365639228',
    appId: '1:391365639228:web:83358b85239c7e57a95739',
    measurementId: 'G-2H0FG112ZX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db, app };
