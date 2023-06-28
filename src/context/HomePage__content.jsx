import {Box, Container, Typography} from "@mui/material";

const HomePage__content = ( ) =>{
    return(
        <Container>
            <Box
                sx={{
                    color:"white",
                    width: {
                        sm:1,
                        lg:0.5
                    },
                    my: {
                        sm:3,
                        lg:10
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
    )
}
export default HomePage__content