import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYGmK83tBTmHzLwLJVVC4dx1p_X-nGK0Q",
  authDomain: "creativaapp-f2e63.firebaseapp.com",
  projectId: "creativaapp-f2e63",
  storageBucket: "creativaapp-f2e63.appspot.com",
  messagingSenderId: "36354846798",
  appId: "1:36354846798:web:f25b4a8262dbc67fb5931f",
  measurementId: "G-TFJQD7VYD1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
