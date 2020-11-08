import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #161B33;
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #0D0C1D;
    font-family: 'Indie Flower', cursive;
  }
`;
