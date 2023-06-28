import {useState} from "react";

const useRegistrationValid = () => {
    const [userName, setName] = useState("")
    const [surrName, setSurrName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [reEmail, setReEmail] = useState("")
    const [reEmailError, setReEmailError] = useState("")
    const [nameError, setNameError] = useState("")
    const [surrNameError, setSurrNameError] = useState("")
    const [passwordError, setPasswordError] = useState( "" )
    const [rePasswordError, setRePasswordError] = useState("")
    const [accepted, setAccepted] = useState(false)
    const [checkColor, setCheckColor] = useState("black")

    const handleNameChange = e => setName(e.target.value)
    const handleSurrNameChange = e => setSurrName(e.target.value)
    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleReEmailChange = e => setReEmail(e.target.value)
    const handleRePasswordChange = e => setRePassword(e.target.value)
    const handleCheckboxChange = e => setAccepted(e.target.checked)


    const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;



    const checkErrors = (e,error) =>{
        error ? e.preventDefault() :""
    }

    const submitHandler = (e) =>{

        setNameError(() => {
            const error = !userName ? "Podaj imię" : ""; // Sprawdzanie, czy błąd został zwrócony
            checkErrors(e,error)
            return error;
        });

        setSurrNameError(() => {
            const error = !surrName ? "Podaj Nazwisko" : ""; // Sprawdzanie, czy błąd został zwrócony
            checkErrors(e,error)
            return error;
        });


        setRePasswordError( () =>{
            const error = password !== rePassword ? "Podane hasła nie są identyczne!" : ""
            checkErrors(e,error)
            return error;
        })

        setCheckColor( () =>{
            const error = !accepted ? "red" : ""
            checkErrors(e,error)
            return error
        })


        setEmailError(() => {
            const error = !email ? "Podaj adres e-mail" : ( !regExpEmail.test(email) ? "Błędny adres e-mail":"" )
            checkErrors(e,error)
            return error
        })

        setReEmailError(() => {
            const error = email !== reEmail ? "Podane adresy e-mail nie są takie same" : ""
            checkErrors(e,error)
            return error
        })

        setPasswordError( () => {
            const error = !regExpPass.test(password) ? "hasło powinno zawierać jeden znak specjalny, dużą literę, cyfrę i długość conajmniej 8 znaków" : ""
            checkErrors(e,error)
            return error
        })


    }
    return{
        submitHandler,
        handleNameChange,
        handleSurrNameChange,
        handleEmailChange,
        handleReEmailChange,
        handlePasswordChange,
        handleRePasswordChange,
        handleCheckboxChange,
        userName,
        nameError,
        surrName,
        surrNameError,
        email,
        emailError,
        reEmail,
        reEmailError,
        password,
        passwordError,
        rePassword,
        rePasswordError,
        accepted,
        checkColor

    }
}
export default useRegistrationValid
