import {Box} from "@mui/material";

const Logo = () =>{
    return(
        <Box sx={{
            width:"5rem",
            transition:"0.5s",
            '&:hover': {
                transform:"rotate(45deg)"
            },}}>
            <a href="/">
                <img src="../../public/images/logo.png" style={{width:"100%"}}  alt=""/>
            </a>
        </Box>
    )
}

export default Logo