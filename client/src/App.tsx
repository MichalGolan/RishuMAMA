import React, {useRef} from "react";
import Viewer from "./components/viewer/Viewer";
import {ThemeOptions, ThemeProvider, createTheme} from "@mui/material/styles";

// const themeOptions: ThemeOptions = {
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#e3eef4',
//         },
//         secondary: {
//             main: '#f50057',
//         },
//     },
// };

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
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: '#069AAA',

                    ":hover": {
                        color: '#03555E',
                        backgroundColor: '#FFE35E',
                        fontWeight: 'bold',
                        // color: 'white',
                    }
                }
            }
        }
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
