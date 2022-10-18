import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCY3lCNaDx9O_hEX71RkYEeTgNa-vN0aHU",
  authDomain: "fashionnovaclone.firebaseapp.com",
  databaseURL: "https://fashionnovaclone-default-rtdb.firebaseio.com",
  projectId: "fashionnovaclone",
  storageBucket: "fashionnovaclone.appspot.com",
  messagingSenderId: "822697474667",
  appId: "1:822697474667:web:f916f6e9e485b020a64f2e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
