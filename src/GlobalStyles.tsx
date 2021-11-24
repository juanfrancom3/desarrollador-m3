import { createGlobalStyle } from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from './consts';

export const GlobalStyles = createGlobalStyle<ThemeTypes>`
    * {
        box-sizing: border-box;
        font-size: 62.5%;
        margin: 0;
    }

    body {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        font-family: 'Archivo', sans-serif;
    }

    h1 {
        font-size: 3.2rem;
        font-weight: 900;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2.7rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 2.3rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 1.7rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    h6,
    p {
        font-size: 1.5rem;
        font-weight: 100;
        margin-bottom: 1rem;
    }
`