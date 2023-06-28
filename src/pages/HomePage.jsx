import {Box, Container, Typography} from "@mui/material";
import HomePage__NavBar from "../components/HomePage__NavBar.jsx";
import HomePage__video from "../components/HomePage__video.jsx";
import HomePage__content from "../context/HomePage__content.jsx";




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
            <HomePage__content />
        </Box>
    );
};


export default HomePage
