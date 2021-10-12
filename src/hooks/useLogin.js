import { useState } from "react"
import useAuth from "./useAuth"

const useLogin =() =>{
    const {passwordLogin, error} =useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        passwordLogin( email, password)

    }
    return {
        error,
        handleEmail,
        handlePassword,
        handleSubmit

    }
}
export default useLogin;