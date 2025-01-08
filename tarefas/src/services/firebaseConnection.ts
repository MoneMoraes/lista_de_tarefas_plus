import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCusf0wz8nUr_bfKjLkt0OtQS0Kf2_VjYM",
  authDomain: "tarefasplus-54582.firebaseapp.com",
  projectId: "tarefasplus-54582",
  storageBucket: "tarefasplus-54582.firebasestorage.app",
  messagingSenderId: "66288844716",
  appId: "1:66288844716:web:19bf46b641835d080f0409"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };