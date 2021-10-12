import { useState } from "react"
import useFirebase from "./useFirebase"

const useRegister =()=>{
    const { passwordLogin} =useFirebase()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        passwordLogin(email,password)

    }
    return{
        handleName,
        handleEmail, 
        handlePassword,
        handleSubmit
    }
}
export default useRegister;