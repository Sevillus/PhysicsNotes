import {Box, Container, Typography} from "@mui/material";
import HomePage__NavBar from "../components/HomePage__NavBar.jsx";
import HomePage__video from "../components/HomePage__video.jsx";


const HomePage = () => {
    return (
        <Box
            sx={{
                width: 1,
                height: "100vh",
                overflow: {
                    lg:"hidden",
                    sm:"scroll"
                }
            }}
        >
            <HomePage__video />
            <HomePage__NavBar />
            <Container>
                <Box
                    sx={{
                        color:"white",
                        width: {
                            sm:1,
                            lg:0.5
                        },
                        p:3,
                        background:"rgba(0,0,0,0.3)"
                }}>
                    <Typography variant={"h1"} >Hello world!</Typography>
                    <Typography variant={"h2"} >
                              Witaj w świecie, gdzie fizyka rządzi się swoimi prawami.
                        <br/> Ta strona jest poświęcona Tobie.
                        <br/> Razem poznamy otaczający nas świat.
                        <br/> Gotowy? Załóż konto i poznaj to niesamowite uniwersum.
                    </Typography>
                </Box>
                 </Container>
        </Box>
    );
};


export default HomePage
