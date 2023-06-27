import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
    palette:{
        primary: {
            main: "#278e9b"
        },
        secondary: {
            main: "#029zca9"
        }
    },
    typography:{
        h1:{
            fontSize:"3rem",
            fontWeight:500,
            margin:"3rem 0 "
        },
        h2:{
            fontSize:"1.25rem",
            fontWeight:400,
            lineHeight:"2rem"
        },
        h3:{
            fontSize:"1.25rem",
            fontWeight:400,
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)



