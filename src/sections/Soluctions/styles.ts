import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;
  padding-bottom:18rem;
  padding-top:2rem;
  display:flex;
  flex-direction:column;
  gap:2.5rem;

  &::before {
    position:absolute;
    top:0;
    left:0;
    transform:translate(-50%, -20%);
    z-index:-1;
    content:'';
    width:81.1rem;
    height:81.1rem;
    border-radius:81.1rem;
    background: ${p => p.theme.pallete.gradient};
    filter:blur(70px);
    opacity:.1;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:8rem;
    
    &::before { display:none; }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:.5rem;
    gap:1.5rem;
    
    &::before { display:none; }
  }
`

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`

export const CardsArea = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:2.5rem 2.5rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    grid-template-columns:repeat(1, 1fr);
  }
`