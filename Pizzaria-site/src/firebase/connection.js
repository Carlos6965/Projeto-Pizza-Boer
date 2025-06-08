import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-hnxTNrzdg92jMfqUfWThqHkANR3LtUw",
  authDomain: "appboer-pizzaria.firebaseapp.com",
  projectId: "appboer-pizzaria",
  storageBucket: "appboer-pizzaria.firebasestorage.app",
  messagingSenderId: "788689539486",
  appId: "1:788689539486:web:9023cc75c52cedb547068f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
