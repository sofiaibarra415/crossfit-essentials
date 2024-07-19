// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  addDoc, collection } from "firebase/firestore";
import { productos } from "../data/asyncMock";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNxO5pvKJRYj_TGWeGNTxjjsbgZ696vJs",
  authDomain: "crossfit-essentials.firebaseapp.com",
  projectId: "crossfit-essentials",
  storageBucket: "crossfit-essentials.appspot.com",
  messagingSenderId: "790632243194",
  appId: "1:790632243194:web:7f8aaea55d24ec08664e43",
  measurementId: "G-G942GLTSMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//productos.forEach((prod) => {
  //addDoc(collection(db, 'productos'), prod)
   // .then((data) => console.log(`el producto ${data.id} se subio correctamente`))
    //.catch((error) => console.log(error));
//})