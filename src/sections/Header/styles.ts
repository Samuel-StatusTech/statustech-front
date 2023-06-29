import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.header`
  padding:28px ${p => p.theme.containers.main};
  display:flex;
  justify-content:space-between;
  align-items:center;
  svg {
    max-width:270px;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {

    svg {
      max-width:171px;
    }

    #getInTouchHeaderBtn,
    #headerLinksArea {
      display:none;
    }

    #burguerMenu {
      display:block;
    }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding:15px;
  }
`

export const LinksArea = styled.div`
  display:flex;
`