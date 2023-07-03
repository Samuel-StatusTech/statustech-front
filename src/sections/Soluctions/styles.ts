import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;

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
    background: ${p=>p.theme.pallete.gradient};
    filter:blur(70px);
    opacity:.1;
  }
`

export const Content = styled.div`
  display:flex;
  flex-direction:column;
`

export const CardsArea = styled.div`
  margin-top:2.5rem;
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:2.5rem 2.5rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    grid-template-columns:repeat(1, 1fr);
  }
`