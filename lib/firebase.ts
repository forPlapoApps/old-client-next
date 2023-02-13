import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_apiKey,
  authDomain:        process.env.NEXT_PUBLIC_authDomain,
  projectId:         process.env.NEXT_PUBLIC_projectId,
  storageBucket:     process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId:             process.env.NEXT_PUBLIC_appId,
  measurementId:     process.env.NEXT_PUBLIC_measurementId,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { provider, auth };
