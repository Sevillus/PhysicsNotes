import { Box, Container } from "@mui/material";
import Logo from "./Logo.jsx";

const LoginRegistrationContainer = (props) => {
    const { children } = props;

    return (
        <Container>
            <Logo />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 1,
                    height: 0.7,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        width: 0.3,
                        p: 8,
                        background: "rgba(0,0,0,0.1)",
                        borderRadius: "1rem",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Container>
    );
};

export default LoginRegistrationContainer