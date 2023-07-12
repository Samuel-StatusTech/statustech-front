import { createGlobalStyle } from "styled-components"
import Sconsts from "./consts"

const Global = createGlobalStyle`

  html {
    font-size:10px;
    color:${({ theme }) => theme.text.primary};
    overflow-x:hidden;
  }

  * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-size:1rem;
  }

  body {
    background-color:${({ theme }) => theme.pallete.bodybg};
    overflow:hidden;
    position:relative;
  }
  
  section { padding:0 ${({ theme }) => theme.containers.main}; }
  footer { padding:4rem ${({ theme }) => theme.containers.main}; }

  .container {
    max-width:1310px;
    margin:auto;
  }

  .sectionName {
    font-size:2.8rem;
    line-height:3.78rem;
    font-weight:normal;
    background-size:inherit;
    position:absolute;
    -webkit-text-fill-color:transparent;
  }

  .sectionName,
  .headerLink,
  .aboutNumber {
    background:${({ theme }) => theme.pallete.gradient};
    -webkit-background-clip:text;
    background-clip: text;
  }

  .sectionTitle {
    font-size:6.4rem;
    line-height:8.64rem;
    font-family:Poppins-Bold;
    margin-top:3.78rem;
  }

  .sectionDescription {
    font-size:2rem;
    line-height:3.1rem;
    color: ${({ theme }) => theme.text.lightgrey};
  }
  
  // smaller monitors
  @media (max-width:1280px) { html { font-size:8px; } }
  @media (max-width:1080px) { html { font-size:7px; } }
  @media (max-width:940px) { html { font-size:6px; } }

  // mobile
  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    html { font-size:10px; }
  }

  @media (max-width:720px) AND (min-width: ${Sconsts.breakpoints.cellphone}px) {
    html { font-size:8px; }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    section { padding:${({ theme }) => theme.containers.mobile}; }
    footer { padding:4.6rem 1.6rem 6.6rem 2.4rem; }

    .sectionName {
      font-size:2.0rem;
      line-height:3.1rem;
    }
  
    .sectionTitle {
      font-size:2.8rem;
      line-height:3.7rem;
      font-family:Poppins-Thin;
    }
  
    .sectionDescription {
      font-size:1.6rem;
      line-height:2.4rem;
    }
  }
`


export default Global