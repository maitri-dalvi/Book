import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "process.env.GOOGLE_API",
    authDomain: "book-app-ac33b.firebaseapp.com",
    projectId: "book-app-ac33b",
    storageBucket: "book-app-ac33b.appspot.com",
    messagingSenderId: "875175149855",
    appId: "1:875175149855:web:080ace3802bac9889db02a",
    databaseURL: "https://book-app-ac33b-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);


