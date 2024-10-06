// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence,initializeAuth } from 'firebase/auth';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD60qguvziGD5xWC2VtuxfbRsoQV_2C_pI",
  authDomain: "intercomm-c1e7e.firebaseapp.com",
  projectId: "intercomm-c1e7e",
  storageBucket: "intercomm-c1e7e.appspot.com",
  messagingSenderId: "591829220760",
  appId: "1:591829220760:web:590d38cf138708f2beffed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app,{
//     persistence: getReactNativePersistence(AsyncStorage)
// })

export const db = getFirestore(app);
export const auth = getAuth(app);

// export const userRef = collection(db,'users');
// export const roomRef = collection(db, 'rooms');

