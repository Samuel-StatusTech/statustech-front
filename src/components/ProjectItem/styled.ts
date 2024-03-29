import styled from "styled-components"
import Sconsts from "../../styled/consts";


export const Project = styled.div`
  cursor:pointer;
  transition:filter .4s;
  filter:saturate(0) brightness(.3);
  aspect-ratio:1 / 1.29;

  &:hover,
  &.projectFocused {
    
    filter:saturate(1) brightness(1);
    div { opacity:1; }
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    min-height:53.4rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    min-height:unset;
    height:fit-content;
    min-width:80vw;
  }
`

export const Thumb = styled.img`
  width: 100%;
  height: auto;
`

export const Content = styled.div`
  position: absolute;
  right: 3.3rem;
  bottom: 3.3rem;
  left: 3.3rem;
  background-color:${p => p.theme.pallete.bodybg};
  padding:3.3rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-radius:.9rem;
  transition:opacity .4s;
  opacity:0;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding:2rem 0 2rem 3rem;
    right: 2rem;
    bottom: 2rem;
    left: 2rem;
  }
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