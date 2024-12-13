import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDVgxWstg_vv9XmnjnXmY7AH7JroIocHRY",
//   authDomain: "ebuddy-ba23e.firebaseapp.com",
//   projectId: "ebuddy-ba23e",
//   storageBucket: "ebuddy-ba23e.firebasestorage.app",
//   messagingSenderId: "89556403128",
//   appId: "1:89556403128:web:2747008523bb3033d5854d",
//   measurementId: "G-NK87HMDL35"
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
