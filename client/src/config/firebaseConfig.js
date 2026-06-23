import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6FiXR1pm5lOh43dIS4ZJauTcbwiJmd4A",
  authDomain: "portafolio-camilo.firebaseapp.com",
  projectId: "portafolio-camilo",
  storageBucket: "portafolio-camilo.firebasestorage.app",
  messagingSenderId: "626071656973",
  appId: "1:626071656973:web:9ca60dcb8e8bdc84945344"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios para usarlos en tus componentes
export const db = getFirestore(app);
export const auth = getAuth(app);