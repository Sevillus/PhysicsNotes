import {Box, Container, Typography} from "@mui/material";

const HomePage__NavBar = () =>{
    return(
        <Container>
            <Box
                sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    my:3,
                    zIndex:"1000"
                }}>
                <img src="../../public/images/logo.png" style={{width:"5rem", filter: "invert(100%)"}} alt=""/>
                <Box
                    sx={{
                        p:1,
                        border:"1px solid white",
                        borderRadius:".25rem",
                        transition:"0.5s",
                        '&:hover': {
                            transform:"scale(1.15)"
                        },
                    }}>
                    <a href="login" style={{color:"white",textDecoration:"none"}}>
                        <Typography variant={"h3"}>Login</Typography>
                    </a>
                </Box>
            </Box>
        </Container>
    )
}

export default HomePage__NavBar