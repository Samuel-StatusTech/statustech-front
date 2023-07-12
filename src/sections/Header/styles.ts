import styled from "styled-components"
import Sconsts from "../../styled/consts"


export const Section = styled.header`
  padding:28px ${({ theme }) => theme.containers.main};
  background: ${({ theme }) => theme.pallete.darkbg};
  box-shadow: 0px 100px 250px -50px rgba(0, 214, 238, 1);

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding:${({ theme }) => theme.containers.mobile};
  }
`

export const Content = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow: 0px 100px 250px -50px rgba(0, 214, 238, 1);

  svg { max-width:270px; }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {

    svg { max-width:171px; }

    #getInTouchHeaderBtn,
    #headerLinksArea {
      display:none;
    }

    #burguerMenu { display:block; }
  }
`

export const LinksArea = styled.div`
  display:flex;
`