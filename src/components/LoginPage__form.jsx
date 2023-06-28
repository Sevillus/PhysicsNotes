import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import useLoginValid from "../hooks/useLoginValid.jsx";

const LoginPage__form = () => {
    const {
        email,
        pass,
        emailError,
        passError,
        handleEmailChange,
        handlePassChange,
        submitHandler
    } = useLoginValid();

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <TextField id="standard-basic" value={email} onChange={handleEmailChange} label="Adres E-mail" variant="standard" sx={{ width: 1, my: 2 }} />
            <Typography variant={"body2"}>{emailError}</Typography>
            <TextField id="standard-basic" value={pass} onChange={handlePassChange} label="Hasło" type="password" variant="standard" sx={{ width: 1, my: 2 }} />
            <Typography variant={"body2"}>{passError}</Typography>
            <Button variant="contained" type={"submit"} sx={{ width: 1, p: 1, my: 2.5 }}>Zaloguj się</Button>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Zapamiętaj mnie" />
        </form>
    );
};

export default LoginPage__form;
