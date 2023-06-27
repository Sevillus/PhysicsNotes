import {Box} from "@mui/material";

const bgVideoUrl = "./images/video.mp4";
const HomePage__video = () =>{
    return(
        <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "70%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-100",
                    width: "150%",
                    height: "150%",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            >
                <source src={bgVideoUrl} type="video/mp4" />
            </video>
        </Box>
    )
}
export default HomePage__video