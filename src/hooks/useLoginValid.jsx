import {useState} from "react";

const useLoginValid = () =>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");


    const submitHandler = (e) =>{
        e.preventDefault()
        setEmailError(() =>{
            if(!email) {
                return "Podaj Adres email"
            }
        })
        setPassError( () =>{
            if(!pass){
                return "Podaj hasło"
            }
        })
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e) => {
        setPass(e.target.value);
    };

    return {
        email,
        pass,
        emailError,
        passError,
        handleEmailChange,
        handlePassChange,
        submitHandler
    };
}
export default useLoginValid;