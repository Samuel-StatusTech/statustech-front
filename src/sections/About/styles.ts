import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  padding-bottom:30rem;

  & > svg {
    position:absolute;
    z-index:-1;
    height:80vh;
    right:0;
    transform:translateX(40%);

    @media (max-width:${Sconsts.breakpoints.tablet}px) {
      height:50vh;
      transform:translateX(60%);
    }
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:20rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) { padding-bottom:2.5rem; }
`

export const Content = styled.div``

export const Titles = styled.div`
  position:relative;
  h2 { top:-3.78rem; }
`

export const MainContent = styled.div`
  display:flex;
  position:relative;
  gap:1rem;
  margin-top:2.5rem;
`

export const Texts = styled.div`
  flex:6;
  display:flex;
  flex-direction:column;
  gap:5rem;
  padding-bottom:10rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    min-width:100%;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) { padding-bottom:0; }
`

export const QualitiesList = styled.div`
  display:flex;
  flex-direction:column;
  gap:5rem;
`

export const Item = styled.div`
  display:flex;
  flex-direction:column;
  gap:1rem;
`

export const ItemTitle = styled.div`
  display:flex;
  gap:1.5rem;

  svg {
    width:2rem;
    height:auto;
  }
`

export const QualityName = styled.h3`
  font-size:2.8rem;
  font-family:Poppins-Light;
  color:${p => p.theme.text.lightwhite};
  white-space:nowrap;

  @media (min-width:640px) AND (max-width:${Sconsts.breakpoints.tablet}px) {
    font-size:2.2rem;
  }

  @media(max-width:${Sconsts.breakpoints.cellphone}px) {
    font-size:2.0rem;
    line-height:3.1rem;
    font-family:Poppins;
    font-weight:normal;
  }
`

export const ItemDesc = styled.span`
  margin-left:3.5rem;
  width:60%;
  font-size:2rem;
  line-height:3.1rem;
  color:${p => p.theme.text.lightgrey};

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    width:48%;
  }

  @media (min-width:640px) AND (max-width:${Sconsts.breakpoints.tablet}px) {
    font-size:1.6rem;
  }

  @media (max-width:540px) {
    width:90%;
  }

  @media(max-width:${Sconsts.breakpoints.cellphone}px) {
    font-size:1.6rem;
    line-height:2.4rem;
    font-family:Poppins;
    font-weight:normal;
  }
`

export const SectionImg = styled.div`
  flex:7;
  display:flex;
  height:fit-content;
  justify-content:flex-end;
  place-self:flex-end;
  max-width:980px;
  
  img {
    margin-left:4rem;
    aspect-ratio:0.84/1;
    width:100%;
  }

  @media (max-width:1280px) {
    max-height:840px;
    width:unset;
    max-width:unset;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    transform:translate(-2rem, -10%);
    position:absolute;
    bottom:0;
    right:0;

    img {
      width:25rem;
      height:auto;
    }
  }

  @media (max-width:740px) { img { width:20rem; } }
  @media (max-width:680px) { display:none; }
`

export const DataBox = styled.div`
  position:absolute;
  bottom:0;
  background-color:${p => p.theme.pallete.darkbg};
  padding:3rem 4.6rem;
  border-radius:3.2rem;
  display:flex;
  gap:6rem;
  box-shadow:${p => p.theme.shadows.dataBox};
  transform:translate(0, 60%);
  width:fit-content;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    transform:translate(0, 70%);
    width:fill-available;
    justify-content:space-around;
    min-width:fit-content;
    gap:5rem;
  }

  @media (max-width:540px) {
    display:none;
  }
`

export const Dinfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  
  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    gap:0;
  }
`

export const Dnumber = styled.span`
  font-size:6.4rem;
  font-family:Poppins-Bold;
  line-height:8.64rem;
  background:${p => p.theme.pallete.gradient};
  -webkit-text-fill-color:transparent;
  -webkit-background-clip:text;
  
  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    font-size:4rem;
    line-height:1.35em;
  }

  @media (min-width:640px) AND (max-width:690px) {
    font-size:3.6rem;
  }
`

export const Dtag = styled.span`
  font-size:2rem;
  color:${p => p.theme.text.lightgrey};
  white-space:nowrap;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    font-size:1.6rem;
  }

  @media (min-width:640px) AND (max-width:690px) {
    font-size:1.2rem;
  }
`
