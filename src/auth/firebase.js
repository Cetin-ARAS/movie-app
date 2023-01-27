import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email, password, navigate) => {    
    //yeni bir kullanıcı için firebase methodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email, 
        password
      );
      navigate('/')
        sessionStorage.setItem("user".JSON.stringfy
        (userCredential.user))
        console.log(userCredential);
    } catch (err) {
        console.log(err);
        
    }  
};
    //giriş için firebase methodu

export const signIn = async(email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(
          auth,
          email, 
          password
        );
        navigate('/')
          console.log(userCredential);
      } catch (err) {
          console.log(err);         
      }  
}

export const userObserver = (setCurrentUser) => {
    //? kullanıcının signin olup olmadığını takip edip kullanıcıdeğiştiğinde yeni kullanıcıyı response dönen firebase methodu
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        } else {
            // user is signout
            setCurrentUser(false);
        }
    });
};




