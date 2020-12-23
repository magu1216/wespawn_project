import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    :root {
        --upload-red: #F20039;
        --lfg-cyan: #1BB5AB;
        --friendlist-blue: #446DFD;
        --primary-gray: white;
        --secondary-gray: #404040;
        --inactivebutton-gray: #8C8C8C;
        --shadow-gray: lightgrey;
    }

    body {
        /* margin-bottom: 85px; */
        font-family: 'Roboto', sans-serif;
        min-height: 100vh;
        height: 100%;
        background: rgb(94,0,158);
        background: linear-gradient(0deg, rgba(42,42,42,1) 0%, rgba(0,0,0,1) 65%); 
    }

    h1,
    h2,
    h3,
    div {
        color: white;
    }

`;

export default GlobalStyle;
