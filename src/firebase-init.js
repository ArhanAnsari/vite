import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN4IsVOOGRDoeqnTWAPX1INtDSERmBUXM",
    authDomain: "whatsapp-clone-424210.firebaseapp.com",
    projectId: "whatsapp-clone-424210",
    storageBucket: "whatsapp-clone-424210.appspot.com",
    messagingSenderId: "197083120782",
    appId: "1:197083120782:web:00ba0151f1a009e8c3b5df"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }