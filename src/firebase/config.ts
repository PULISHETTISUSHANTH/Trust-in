// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your Firebase project configuration
// Get this from Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyCG-ew_3TYnebs3-EIfo4p8kEzOtFReCA8",
  authDomain: "trust-in-7cd23.firebaseapp.com",
  projectId: "trust-in-7cd23",
  storageBucket: "trust-in-7cd23.firebasestorage.app",
  messagingSenderId: "150262438366",
  appId: "1:150262438366:web:a96e08dbc5706870b4254f",
  measurementId: "G-5L05K6LGFW"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Auth (for future use)
export const auth = getAuth(app);

export default app;