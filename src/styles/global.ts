import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 2px ${(props) => props.theme.colors["yellow-600"]};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors["base-background"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: ${(props) => props.theme.typography["text-M"]};
    line-height: 1.3;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Baloo 2", sans-serif;
  }
`;
