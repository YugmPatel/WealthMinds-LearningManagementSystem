// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpGho3b0xvTN8pQDUpWWJ_T-0oPMN3JD8",
  authDomain: "wealthminds-48d3e.firebaseapp.com",
  projectId: "wealthminds-48d3e",
  storageBucket: "wealthminds-48d3e.appspot.com",
  messagingSenderId: "537947311090",
  appId: "1:537947311090:web:2a4f7c14a7d7d4292cf96b",
  measurementId: "G-L4TGNS3QCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);