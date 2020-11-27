import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    body {
        background-color: #404040;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
