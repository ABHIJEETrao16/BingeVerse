import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBtNOvcFGJOWWXup-0qcjT5WVC2ZB_BkY4",
  authDomain: "filmyverse-6174b.firebaseapp.com",
  projectId: "filmyverse-6174b",
  storageBucket: "filmyverse-6174b.appspot.com",
  messagingSenderId: "838658616063",
  appId: "1:838658616063:web:3b5ca9ccfd1a148ab27aca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export default app;
