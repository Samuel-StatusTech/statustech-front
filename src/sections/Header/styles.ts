import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.header`
  padding:28px ${p => p.theme.containers.main};
  background: rgba(23, 25, 26, 1);
  box-shadow: 0px 100px 250px -50px rgba(0, 214, 238, 1);
`

export const Content = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: rgba(23, 25, 26, 1);
  box-shadow: 0px 100px 250px -50px rgba(0, 214, 238, 1);

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
    padding:${p=>p.theme.containers.mobile};
  }
`

export const LinksArea = styled.div`
  display:flex;
`