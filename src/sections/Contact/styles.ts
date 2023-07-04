import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  padding-bottom:20rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:10rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:2.5rem;
  }
`

export const Content = styled.div``
