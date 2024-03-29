import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB-K7nwSul8RJ6UuXxIGw86-ORfR4ccCss",
    authDomain: "twitter-clone-78c7f.firebaseapp.com",
    projectId: "twitter-clone-78c7f",
    storageBucket: "twitter-clone-78c7f.appspot.com",
    messagingSenderId: "978715297858",
    appId: "1:978715297858:web:fe11bcd586f1be456405db",
    measurementId: "G-R30TG5XHEM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div>
      
    </div>
  )


export default firebaseConfig
