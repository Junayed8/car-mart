// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmqrKgCge39dZQSfdWCRpZbtXUO315Zcs",
  authDomain: "car-mart-acf9f.firebaseapp.com",
  projectId: "car-mart-acf9f",
  storageBucket: "car-mart-acf9f.appspot.com",
  messagingSenderId: "983806388147",
  appId: "1:983806388147:web:cf59f7746824e2e37b4dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;