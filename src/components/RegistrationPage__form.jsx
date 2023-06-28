import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import useRegistrationValid from "../hooks/useRegistrationValid.jsx";

const RegistrationPage__form = () =>{
const {
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

} = useRegistrationValid ()




    return(
        <form action={"login"} onSubmit={ (e) => submitHandler(e)}>

            <Box
                sx={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                <Box>
                    <TextField id="name" label="Imię" value={userName} onChange={handleNameChange} variant="standard"  sx={{width:0.5, my:2}}/>
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