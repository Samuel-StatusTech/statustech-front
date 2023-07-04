import styled from "styled-components"
import Sconsts from "../../styled/consts";


export const Project = styled.div<{ bg: string; }>`
  background-image:url(${p => p.bg});
  background-position:center;
  background-size:cover;
  padding:3.3rem;
  aspect-ratio:1/1.29;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:flex-end;
  transition:filter .4s;
  filter:saturate(0) brightness(.3);
  min-height:53.8rem;

  &:hover {
    filter:saturate(1) brightness(1);

    div {
      opacity:1;
    }
  }
`

export const Content = styled.div`
  background-color:${p => p.theme.pallete.bodybg};
  padding:3.3rem;
  display:flex;
  justify-content:space-between;
  border-radius:.9rem;
  transition:opacity .4s;
  opacity:0;
`

export const ProjectDetails = styled.div`
  display:flex;
  flex-direction:column;
  gap:.8rem;
`

export const Client = styled.span`
  font-size:2.8rem;
  font-family:Poppins-Light;
  color:${p => p.theme.text.lightwhite};
`

export const Name = styled.span`
  font-size:2rem;
  color:${p => p.theme.text.lightwhite};
`

export const ArrowArea = styled.div`
  display:grid;
  place-items:center;
  background-color:${p => p.theme.pallete.projectLink};
  width:6.4rem;
  height:6.4rem;
  border-radius:6.4rem;

  svg {
    width:2.4rem;
    height:2.4rem;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    width:5.4rem;
    height:5.4rem;
  }
`