import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth"

const useGoogleLogin = () =>{
    const { googleLogin } = useAuth()
    const history = useHistory()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home' //if login is came from login page, redirect to home page
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return {
        handleGoogleLogin
    }
}
export default useGoogleLogin;