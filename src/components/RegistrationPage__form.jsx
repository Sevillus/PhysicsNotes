import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {useState} from "react";

const RegistrationPage__form = () =>{

    const [name, setName] = useState("")
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


    const errorCount = []

    const countErrors = (error) =>{
        if( error && !errorCount.includes(error)){
            errorCount.push(error)
        }else{
            errorCount.filter(er => er !== error)
        }
    }

    const submitHandler = (e) =>{


        e.preventDefault()

        setNameError(() => {
            const error = !name ? "Podaj imię" : ""; // Sprawdzanie, czy błąd został zwrócony
            countErrors(error)
            return error;
        });

        setSurrNameError(() => {
            const error = !surrName ? "Podaj Nazwisko" : ""; // Sprawdzanie, czy błąd został zwrócony
            countErrors(error)
            return error;
        });


        setRePasswordError( () =>{
            const error = password !== rePassword ? "Podane hasła nie są identyczne!" : ""
            countErrors(error)
            return error;
        })

        setCheckColor( () =>{
            const error = !accepted ? "red" : ""
            countErrors()
            return error
        })


        setEmailError(() => {
            const error = !email ? "Podaj adres e-mail" : ( !regExpEmail.test(email) ? "Błędny adres e-mail":"" )
            countErrors(error)
            return error
        })

        setReEmailError(() => {
            const error = email !== reEmail ? "Podane adresy e-mail nie są takie same" : ""
            countErrors(error)
            return error
        })

        setPasswordError( () => {
            const error = !regExpPass.test(password) ? "hasło powinno zawierać jeden znak specjalny, dużą literę, cyfrę i długość conajmniej 8 znaków" : ""
            countErrors(error)
            return error
        })

        console.log(errorCount)
    }



    return(
        <form onSubmit={ (e) => submitHandler(e)}>

            <Box
                sx={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                <Box>
                    <TextField id="name" label="Imię" value={name} onChange={handleNameChange} variant="standard"  sx={{width:0.5, my:2}}/>
                    <Typography variant={"body2"}>{nameError}</Typography>
                </Box>
                <Box>
                    <TextField id="surrName" label="Nazwisko" value={surrName} onChange={handleSurrNameChange} variant="standard"  sx={{width:1, my:2}}/>
                    <Typography variant={"body2"}>{surrNameError}</Typography>
                </Box>
            </Box>

            <TextField id={"email"} label="Adres E-mail" variant="standard" value={email} onChange={handleEmailChange} sx={{width:1, my:2}}/>
            <Typography variant={"body2"}>{emailError}</Typography>

            <TextField id="reEmail" value={reEmail} onChange={handleReEmailChange} label="Powtórz E-mail" variant="standard"   sx={{width:1, my:2}}/>
            <Typography variant={"body2"}>{reEmailError}</Typography>

            <TextField id="password" label="Hasło" type="password" variant="standard" value={password} onChange={handlePasswordChange}  sx={{width:1, my:2}}/>
            <Typography variant={"body2"}>{passwordError}</Typography>

            <TextField id="rePassword" label="Powtórz Hasło" type="password" variant="standard" value={rePassword} onChange={handleRePasswordChange}  sx={{width:1, my:2}}/>
            <Typography variant={"body2"}>{rePasswordError}</Typography>

            <Button variant="contained" id={"checkbox"} type={"submit"} sx={{width:1 ,p:1,my:2.5}}>Zaloguj się</Button>
            <FormControlLabel control={<Checkbox checked={accepted} />} sx={{color:`${checkColor}`}} onChange={handleCheckboxChange} label="Akcpetuję regulamin strony" />

        </form>
    )
}

export default RegistrationPage__form