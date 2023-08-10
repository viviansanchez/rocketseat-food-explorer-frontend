import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    height: 100vh;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    /* transition: filter 0.2s; */
  }

  /* button:hover, a:hover {
    filter: brightness(0.9);
  } */
`