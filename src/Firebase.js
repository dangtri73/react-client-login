import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import axios from "axios"

const fetchData = (data) => {
    return axios.post("http://app.dev.api.hftvn.com/life-plan/api/v1/login")
        .then((response) => console.log(response.data))
        .catch(e => {console.log(e.message);});
}

const firebaseConfig = {
  apiKey: "AIzaSyBLOF1zhThK_uF-zJLN7xM6UsbyZUYu3TM",
  authDomain: "gpt-testing-62faa.firebaseapp.com",
  projectId: "gpt-testing-62faa",
  storageBucket: "gpt-testing-62faa.appspot.com",
  messagingSenderId: "459659796341",
  appId: "1:459659796341:web:d38047bd35c029cc253d3c",
  measurementId: "G-QBNXL1MWKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
        console.log(result);
        fetchData(result?.user?.accessToken);
    })
    .catch(e => console.warn(e.message))
}