import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";


initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // google login with popup
    const googleLogin = () => signInWithPopup(auth, googleProvider)

    // password registration using form
    const passwordRegister = (username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                profileUpdate(username)
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // password login
    const passwordLogin = (email,password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user);
            console.log(result.user);
            setError('')
        })
        .catch(error => {
            setError(error.meassage)
        })
    }
    // updating profile name when login
    const profileUpdate = (username) => {
        updateProfile(auth.currentUser, {
            displayName: username
        })
    }
    //
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user);
            }
        })
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    return {
        user,
        error,
        googleLogin,
        logout,
        passwordRegister,
        passwordLogin
    }

}
export default useFirebase;