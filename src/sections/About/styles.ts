import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  padding-bottom:29rem;
  padding-top:2rem;

  & > svg {
    position:absolute;
    z-index:-1;
    height:1380px;
    right:0;
    transform:translateX(30%);

    @media (max-width:${Sconsts.breakpoints.tablet}px) {
      height:50vh;
      transform:translateX(60%);
    }
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:17.8rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:.4rem;
    & > svg { display:none; }
  }
`

export const Content = styled.div``

export const Titles = styled.div`
  position:relative;
  h2 { top:-3.78rem; }
`

export const MainContent = styled.div`
  display:flex;
  position:relative;
  gap:4rem;
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



export const SectionImg = styled.div`
  flex:7;
  display:flex;
  height:fit-content;
  justify-content:flex-end;
  place-self:flex-end;
  max-width:622px;
  
  img {
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
  -webkit-text-fill-color:transparent;
  
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
  color:${({ theme }) => theme.text.lightgrey};
  white-space:nowrap;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    font-size:1.6rem;
  }

  @media (min-width:640px) AND (max-width:690px) {
    font-size:1.2rem;
  }
`
