import { getFirestore  } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfpUkEon6qPgqVTyp3zswUKD1ONA9zEVs",
    authDomain: "whatsapp-clone-382716.firebaseapp.com",
    projectId: "whatsapp-clone-382716",
    storageBucket: "whatsapp-clone-382716.appspot.com",
    messagingSenderId: "402533009389",
    appId: "1:402533009389:web:f61a5eddf646385bd489e4"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }