import { useState } from "react";
import initAuth from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
    
    return{
        user,
        googleLogin
    }

}
export default useFirebase;