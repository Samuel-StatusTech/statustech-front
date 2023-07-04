import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;
  padding-bottom:20rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:10rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:2.5rem;
  }
`

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:6.5rem;
`

export const Top = styled.div`
  display:flex;
  justify-content:space-between;
  gap:10rem;
`

export const Titles = styled.div`
  position:relative;
`