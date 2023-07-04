import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;

  & > svg {
    position:absolute;
    z-index:-1;
    right:0;
    transform:translateX(70%);

    @media (max-width:${Sconsts.breakpoints.tablet}px) {
      height:50vh;
    }
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
`

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:6.5rem;
`

export const ListArea = styled.div`
  display:flex;
  flex-direction:column;
  gap:5.5rem;
`

export const Top = styled.div`
  display:flex;
  gap:20rem;

  img {
    max-height:22rem;
  }
`

export const Titles = styled.div`
  position:relative;
`