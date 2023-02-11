import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
    createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "../utils.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyANnOkIE7JjU5ZgjFs4--JOUu-PrxU2Yjw",
  authDomain: "moon-1d526.firebaseapp.com",
  projectId: "moon-1d526",
  storageBucket: "moon-1d526.appspot.com",
  messagingSenderId: "948126260489",
  appId: "1:948126260489:web:c52ddfb63c225dde7ec7d8",
  measurementId: "G-TK7RXJBQKF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.message);
  }
};

export const GoogleAuth = async () => {
  try {
    auth.languageCode = "it";
    const provider = await new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
  } catch (err) {
    toast.error(err.code);
  }
};
export const GithubAuth = async () => {
  try {
    const provider = new GithubAuthProvider();
    const response = await signInWithPopup(auth, provider);
  } catch (err) {
    toast.error(err.code);
  }
};
export const AppleAuth = async () => {
  try {
    const provider = new OAuthProvider("apple.com");
    provider.addScope("email");
    provider.addScope("name");
    const response = await signInWithPopup(auth, provider);
  } catch (err) {
    toast.error(err.code);
  }
};

export const register = async (email, password) =>{
  try {
    const {user} =await createUserWithEmailAndPassword(auth, email, password)
    return user
  }catch (err){
    toast.error(err.code)
  }
}