import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        --color-gray: rgba(0, 0, 0, 0.2);
        --color-gray-1: rgba(0, 0, 0, 0.4);
        --color-black: #0D0D0D;
        --color-error: #CF2C00;
        --color-white: #FFF;
        --color-blue: #45a5ff7a;
        --color-blue-1: #0055FB;
        --color-gray-2: #999999;
        --color-grad-1: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
        --color-grad-2: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
        --color-grad-3: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
        --color-grad-4: linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%);
    }
    
    body {
        font-size: 14px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", 
            "Droid Sans", "Helvetica Neue", sans-serif;
    }
`;

export default GlobalStyle;
