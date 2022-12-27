import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCovOuagJpUIvL9EsPeye5w05Lyrtvj494",
  authDomain: "lastvideo-7de43.firebaseapp.com",
  projectId: "lastvideo-7de43",
  storageBucket: "lastvideo-7de43.appspot.com",
  messagingSenderId: "560335050799",
  appId: "1:560335050799:web:4a93983fc50511a5fd4eda"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
