import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'OpenSans', sans-serif;
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        padding: 5px;
    }
`;
