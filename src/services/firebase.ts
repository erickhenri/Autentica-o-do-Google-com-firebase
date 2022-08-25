import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC_sRKq_7lfCnjr_hZJuVK-eFrk6J9suVQ",
  authDomain: "login-6a107.firebaseapp.com",
  projectId: "login-6a107",
  storageBucket: "login-6a107.appspot.com",
  messagingSenderId: "259412847353",
  appId: "1:259412847353:web:568de1e71b46d8bc179028"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 