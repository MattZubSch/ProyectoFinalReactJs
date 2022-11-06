import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDy0Y8XX68EF6vrJz0fuF6PknXevJCvKyk",
  authDomain: "meldent-69ea2.firebaseapp.com",
  projectId: "meldent-69ea2",
  storageBucket: "meldent-69ea2.appspot.com",
  messagingSenderId: "411882995552",
  appId: "1:411882995552:web:2a4cc24db0bf4140c02805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)