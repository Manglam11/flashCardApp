import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn8Lc5jZ6RNPB4f6m0Jpza-XikYXpDyC8",
  authDomain: "flashcardapp-36c23.firebaseapp.com",
  projectId: "flashcardapp-36c23",
  storageBucket: "flashcardapp-36c23.appspot.com",
  messagingSenderId: "294494266588",
  appId: "1:294494266588:web:bf71feaddedbb1d81a0019",
  measurementId: "G-9YEQ9MRM6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
