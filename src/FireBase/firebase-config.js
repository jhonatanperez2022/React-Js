import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOSRwdpvUVCrW7jwHSD9Hsurd0mC9p1Gs",
  authDomain: "tricojuegos.firebaseapp.com",
  projectId: "tricojuegos",
  storageBucket: "tricojuegos.appspot.com",
  messagingSenderId: "1073444668282",
  appId: "1:1073444668282:web:d58984a313eebf95c78cc3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);