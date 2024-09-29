import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREABASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREABASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREABASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREABASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREABASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREABASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREABASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); //FOR SERVER SIDE RENDERING
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth }

//Install npm i react-firebase-hooks