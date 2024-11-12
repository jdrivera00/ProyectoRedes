import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyIekq5Z-6OpZk07mr7WoBY7N66q7EFKQ",
    authDomain: "proyectoredes-eb3cf.firebaseapp.com",
    projectId: "proyectoredes-eb3cf",
    storageBucket: "proyectoredes-eb3cf.firebasestorage.app",
    messagingSenderId: "330783118613",
    appId: "1:330783118613:web:65bbf9e437364435dd851c",
    measurementId: "G-Q74BRW21M5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, deleteDoc, updateDoc };