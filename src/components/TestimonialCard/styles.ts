import styled from "styled-components"
import Sconsts from "../../styled/consts"


export const Card = styled.div`
  background-color:${p => p.theme.pallete.darkbg};
  border-radius:15px;
  padding:5rem 6.6rem;
  display:flex;
  flex-direction:column;
  gap:2.5rem;
  min-width:77.4rem;
  max-width:77.4rem;
  cursor:default;
  
  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    min-width:calc(100vw - 20rem);
    max-width:calc(100vw - 20rem);
    padding:3rem 2.4rem 1.2rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    min-width:calc(100vw - 6rem);
    max-width:calc(100vw - 6rem);
  }
`

export const Top = styled.div`
  display:flex;
  gap:15px;
  align-items:center;
`

export const ImgBg = styled.div`
  background-color:${p => p.theme.pallete.bodybg};
  
  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    display:none;
  }
`

export const Info = styled.div`
  display:flex;
  flex-direction:column;
  gap:.4rem;
`

export const Name = styled.span`
  font-family:Poppins-Light;
  font-size:2em;
  line-height:2.7rem;
  color:${p => p.theme.text.lightwhite};
`

export const Role = styled.span`
  font-size:2rem;
  line-height:3.1rem;
  color:${p => p.theme.text.lightwhite};
`

export const Text = styled.span`
  font-size:2rem;
  line-height:3.1rem;
  color:${p => p.theme.text.lightwhite};
`
