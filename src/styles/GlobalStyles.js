import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --font: system-ui;
    --red: #e70707;
    --orange: #e5a124;
    --green: forestgreen;
  
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  
  }

  html{
    scroll-behavior: smooth;
  }
  


  a {
  text-decoration: none;
  }
  
  a:visited {
  color: white;
  }
  
  li {
  list-style: none;
  }
`;