import styled from "styled-components"
import Sconsts from "../../styled/consts"



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

export const QualityName = styled.h2`
  font-size:2.8rem;
  line-height:135%;
  font-family:Poppins;
  font-weight:300;
  color:${p => p.theme.text.lightwhite};
  white-space:nowrap;

  @media (min-width:640px) AND (max-width:${Sconsts.breakpoints.tablet}px) {
    font-size:2.2rem;
  }

  @media(max-width:${Sconsts.breakpoints.cellphone}px) {
    font-size:2.0rem;
    font-family:Poppins;
    font-weight:normal;
  }
`

export const ItemDesc = styled.span`
  margin-left:3.5rem;
  width:80%;
  font-size:2rem;
  line-height:155%;
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
  }
`