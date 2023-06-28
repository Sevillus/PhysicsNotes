import { Box, Link, Typography } from "@mui/material";
import LoginPage__form from "../components/LoginPage__form.jsx";


const LoginPage__content = () => {
    return (
        <Box>
            <Typography variant={"h1"} sx={{ fontSize: 36, my: 0 }}>
                Zaloguj się!
            </Typography>
            <LoginPage__form />
            <Typography variant={"h4"}>
                Nie masz jeszcze konta? <Link href="registration">Zarejestruj się!</Link>
            </Typography>
        </Box>
    );
};

export default LoginPage__content;