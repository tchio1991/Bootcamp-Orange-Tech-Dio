import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100vh;
    
    background-color: #1E192C;

    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
`