import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";
initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error=>{
                console.log(error.message);
            })
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)  
        } 
    })
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    return{
        user,
        googleLogin,
        logout
    }

}
export default useFirebase;