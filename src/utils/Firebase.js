// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNVjgs0tj4ALJUc9SAMh0GTlR9lSKq76U",
  authDomain: "sahilbookbinding-b474d.firebaseapp.com",
  projectId: "sahilbookbinding-b474d",
  storageBucket: "sahilbookbinding-b474d.appspot.com",
  messagingSenderId: "97985170460",
  appId: "1:97985170460:web:9b5f2813da311cc79fe3d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth();

export { db, storage };
