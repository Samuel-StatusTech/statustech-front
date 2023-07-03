import { createGlobalStyle } from "styled-components"
import Sconsts from "./consts"

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

  section {
    padding:28px ${p => p.theme.containers.main};
  }

  .sectionName {
    font-size:2.8rem;
    line-height:3.78rem;
    font-weight:normal;
    background:${p => p.theme.pallete.gradient};
    -webkit-text-fill-color:transparent;
    -webkit-background-clip:text;
    background-size:inherit;
    position:absolute;
  }

  .sectionTitle {
    font-size:6.4rem;
    line-height:8.64rem;
    color:${p => p.theme.text.primary};
    font-family:Poppins-Bold;
    margin-top:3.78rem;
  }

  .sectionDescription {
    font-size:2rem;
    line-height:3.1rem;
    color: rgba(144, 161, 165, 1);
  }


  // big monitors
  @media (min-width:1600px) { html { font-size:11px; } }
  @media (min-width:1800px) { html { font-size:13px; } }
  @media (min-width:2400px) { html { font-size:16px; } }
  
  // smaller monitors
  @media (max-width:1480px) { html { font-size:9px; } }
  @media (max-width:1080px) { html { font-size:7px; } }
  @media (min-width:881px) AND (max-width:940px) { html { font-size:6px; } }

  // mobile
  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    html { font-size:10px; }

    .sectionName { font-size:2.3rem; line-height:1.55em; }
    .sectionTitle { font-size:4.8rem; line-height:1.35em; }
  }

  @media (max-width:644px) { html { font-size:8px; } }
  @media (max-width:544px) { html { font-size:6px; } }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    section { padding:${p => p.theme.containers.mobile}; }
  }
`


export default Global