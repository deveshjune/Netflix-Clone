import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0krCH754OaynNkgzIu307SeV9ANkcorQ",
    authDomain: "netf-92b69.firebaseapp.com",
    projectId: "netf-92b69",
    storageBucket: "netf-92b69.firebasestorage.app",
    messagingSenderId: "619744843474",
    appId: "1:619744843474:web:27095e32b58b5cefddff0b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore(app);

const signup=async(name,email,password)=>{
  try{
    const res= await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
    })
  }catch (error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
  
}

const login=async(email,password)=>{
  try{
    await signInWithEmailAndPassword(auth,email,password);
  }catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout =()=>{
  signOut(auth);
}

export{auth,db,login,signup,logout}