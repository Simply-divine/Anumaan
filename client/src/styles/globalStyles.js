import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: calc(12px + 0.4vw);
    font-display: fallback !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: inherit;
    height: 100vh;
  }
  #root {
    height:100vh;
  }
  input, button, select, textarea, optgroup, option {
    font-family: inherit;
    font-weight: inherit;
    font-size: 14px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.5em;
    letter-spacing: 0px;
    font-family: inherit;
    font-weight: inherit;
  }
  p, a {
    font-size: 16px;
  }
  a {
    text-decoration: none;
    line-height: 1.5em;
  }
  .svg-inline--fa {
    margin: 0px 5px
  }
`;

export default GlobalStyles;
