
import { useEffect, useState } from "react";
import NewContext from "./CreateContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebaseAuth";



const Context = ({children}) => {

    const [ user , setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    // reate account email password
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // SignIn
    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // logOut
    const logOut = () => {
        return signOut(auth)
    }

    // user ovserved
    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
            console.log("user now",currenUser)
            setLoading(false);
        })
        return () => {
            unscribe();
        }
    }, [])

    const contextInfo = {
        user, 
        loading,
        createAccount,
        SignIn,
        logOut
    }
    
    return (
        <NewContext.Provider value={contextInfo}>
           {children}
        </NewContext.Provider>
    );
};

export default Context;