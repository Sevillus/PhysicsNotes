import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

const RegistrationPage__form = () =>{
    return(
        <form action="">
            <Box
                sx={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                <TextField id="standard-basic" label="Imię" variant="standard"  sx={{width:0.3, my:2}}/>
                <TextField id="standard-basic" label="Nazwisko" variant="standard"  sx={{width:0.55, my:2}}/>
            </Box>
            <TextField id="standard-basic" label="Adres E-mail" variant="standard"  sx={{width:1, my:2}}/>
            <TextField id="standard-basic" label="Powtórz E-mail" variant="standard"  sx={{width:1, my:2}}/>
            <TextField id="standard-basic" label="Hasło" type="password" variant="standard"  sx={{width:1, my:2}}/>
            <TextField id="standard-basic" label="Powtórz Hasło" type="password" variant="standard"  sx={{width:1, my:2}}/>
            <Button variant="contained" type={"submit"} sx={{width:1 ,p:1,my:2.5}}>Zaloguj się</Button>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Akcpetuję regulamin strony" />
        </form>
    )
}

export default RegistrationPage__form