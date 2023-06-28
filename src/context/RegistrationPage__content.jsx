import { Box, Link, Typography } from "@mui/material";
import RegistrationPage__form from "../components/RegistrationPage__form.jsx";

const RegistrationPage__content = () => {
    return (
        <Box>
            <Typography variant={"h1"} sx={{ fontSize: 36, my: 0 }}>
                Zarejestruj się!
            </Typography>
            <RegistrationPage__form />
            <Typography variant={"h4"}>
                Masz już konto? <Link href="login">Zaloguj się!</Link>
            </Typography>
        </Box>
    );
};

export default  RegistrationPage__content;