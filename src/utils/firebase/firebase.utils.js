import { initializeApp  } from 'firebase/app';
import { 
    GoogleAuthProvider, 
    getAuth,
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// capstone-web-app <-> captone-db Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3k8q6zRW4CmhvkjKr_yESXycihG-y7j4",
    authDomain: "capstone-db-f0033.firebaseapp.com",
    projectId: "capstone-db-f0033",
    storageBucket: "capstone-db-f0033.appspot.com",
    messagingSenderId: "458230665308",
    appId: "1:458230665308:web:324637021bc0f891201699"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// In order to user need to intialise Google Auth class
const googleAuthProvider = new GoogleAuthProvider();
// always force to select account
googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users',userAuth.uid);
    console.log(userDocRef);
    // allows to access data and to see whether the data exists in the db
    const userSnapShot = await getDoc(userDocRef);

    // if user data doesn't exist then create/set document with the data from userAuth into collection
    if(!userSnapShot.exists()) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    // if user data exists, return the data
    return userDocRef;
}

// interface layer functions

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuthUser = async () => signOut(auth);