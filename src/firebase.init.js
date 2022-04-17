// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFdEPOchN7Qrv5kNX06Y79TxGG_-t8XHQ",
  authDomain: "independent-service-prov-d625d.firebaseapp.com",
  projectId: "independent-service-prov-d625d",
  storageBucket: "independent-service-prov-d625d.appspot.com",
  messagingSenderId: "373265837309",
  appId: "1:373265837309:web:ef7b362c017cd3599aa294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;