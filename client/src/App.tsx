import React, {useRef} from "react";
import Viewer from "./components/viewer/Viewer";
import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#e3eef4',
            contrastText: '#03555E',
            dark: '#069AAA',
        },
        secondary: ({ main: '#069AAA' }),
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#069AAA',
                    cursor: "pointer",
                    ":hover": {
                        color: '#03555E',
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: '#069AAA',

                    ":hover": {
                        color: '#03555E',
                        backgroundColor: '#FFE35E',
                        fontWeight: 'bold',
                    }
                }
            }
        },
    }
});

export function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Viewer/>
            </ThemeProvider>
        </div>
    )
}
