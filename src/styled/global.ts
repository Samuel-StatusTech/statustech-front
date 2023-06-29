import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

  html {
    font-size:10px;
    color:${p => p.theme.text.primary};
  }

  * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-size:1rem;
  }

  body {
    background-color:${p => p.theme.pallete.bodybg};
  }
`


export default Global