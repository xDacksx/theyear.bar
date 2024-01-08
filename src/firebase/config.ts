// Import the functions you need from the SDKs you need
import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = import.meta.env;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: env.VITE_apiKey,
    authDomain: env.VITE_authDomain,
    projectId: env.VITE_projectId,
    storageBucket: env.VITE_storageBucket,
    messagingSenderId: env.VITE_messagingSenderId,
    appId: env.VITE_appId,
    measurementId: env.VITE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
