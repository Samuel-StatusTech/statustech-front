import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;
  padding-bottom:27rem;
  padding-top:2rem;

  & > svg {
    position:absolute;
    z-index:-1;
    right:0;
    transform:translateX(70%);
  }

  &::before {
    position:absolute;
    top:0;
    right:0;
    transform:translate(50%, -30%);
    z-index:-1;
    content:'';
    width:81.1rem;
    height:81.1rem;
    border-radius:81.1rem;
    background: ${p=>p.theme.pallete.gradient};
    filter:blur(70px);
    opacity:.1;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:4.3rem;

    & > svg,
    &::before { display:none; }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:5.2rem;
  }
`

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:6.5rem;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    gap:1.5rem;
  }
`

export const ListArea = styled.div`
  display:flex;
  flex-direction:column;
  gap:5.5rem;
`

export const Top = styled.div`
  display:flex;
  justify-content:space-between;
  gap:10rem;
`

export const ImageContainer = styled.div`
  align-self:flex-end;

  img {
    max-height:22rem;
    height:auto;
    max-width:100%;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    display:none;
  }
`

export const Titles = styled.div`
  position:relative;
`