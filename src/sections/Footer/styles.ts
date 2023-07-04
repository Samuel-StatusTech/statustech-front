import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Footer = styled.footer`
  background-color:${p => p.theme.pallete.darkbg};
  display:flex;
  justify-content:space-between;

  & * {
    font-size:1.6rem;
    color:${p => p.theme.text.lightgrey};
  }

  @media (max-width:780px) {
    flex-direction:column;
    gap:2rem;
  }
`

export const CopyArea = styled.div`
  display:flex;
  flex-direction:column;
  max-width:35rem;
  gap:1.5rem;

  @media (max-width:780px) {
    max-width:unset;
  }
`

export const CompanyRole = styled.span``

export const RightsArea = styled.div``

export const LinksCol = styled.div`
  width:fit-content;
  display:flex;
  flex-direction:column;
  gap:1.5rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    display:none;
  }
`

export const ColTitle = styled.span`
  font-size:2rem;
  color:${p => p.theme.text.lightwhite};
`

export const Links = styled.div`
  display:flex;
  flex-direction:column;
  gap:1.5rem;
`

export const Link = styled.a`
  text-decoration:none;
  cursor:pointer;

  display:flex;
  gap:1rem;

  svg {
    width:2.4rem;
    height:2.4rem;
  }

  &:hover {
    text-decoration:underline;
  }
`

export const Ways = styled(Links)`
  gap:2.5rem;
`

export const ContactArea = styled.div`
  width:fit-content;
  display:flex;
  flex-direction:column;
  gap:1.5rem;
`