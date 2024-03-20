import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjqd39GHooSRjCOY08EC-mXJG2NIcFIpc",
  authDomain: "ecommerce-reactflex-ch.firebaseapp.com",
  projectId: "ecommerce-reactflex-ch",
  storageBucket: "ecommerce-reactflex-ch.appspot.com",
  messagingSenderId: "938333591199",
  appId: "1:938333591199:web:3709665908955ce76034aa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);