import styled from "styled-components"
import Sconsts from "../../styled/consts"


export const Card = styled.div`
  background-color:${p => p.theme.pallete.darkbg};
  border-radius:15px;
  padding:4rem 2.5rem;
  display:flex;
  align-items:top;
  gap:30px;

  svg {
    min-width:7.9rem;
    height:min-content;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    svg { min-width:6rem; }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    svg { display:none; }
  }
`

export const CardInfo = styled.div`
  display:flex;
  flex-direction:column;
  gap:15px;
`

export const SoluctionName = styled.h2`
  font-size:2.0rem;
  line-height:3.1rem;
  font-family:Poppins-Thin;
  white-space:nowrap;
  
  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    color:${p => p.theme.text.lightblue};
  }
`

export const SoluctionDescription = styled.span`
font-size:1.6rem;
line-height:2.4rem;
  color:rgba(255, 255, 255, 0.8);
`
