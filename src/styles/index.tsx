import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {

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
