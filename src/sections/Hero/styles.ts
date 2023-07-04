import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  padding:3rem ${p => p.theme.containers.main};
  margin-bottom:8rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) { margin-bottom:2rem; }
  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding:5rem ${p => p.theme.containers.mobile} 3rem;
    margin-bottom:0;
  }
`

export const Content = styled.div`
  display:flex;
  gap:5.5rem;
  justify-content:space-between;
  align-items:top;
  max-width:1274px;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    flex-direction:column;
    gap:6rem;
  }
`

export const Texts = styled.div`
  padding-top:12rem;
  display:flex;
  flex-direction:column;
  gap:3rem;
  min-width:59rem;
  max-width:59rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    min-width:unset;
    flex:1;
    padding-top:0rem;
  }
`

export const ImageWrapper = styled.div`
  flex:1;
  max-width:63rem;

  img {
    max-width:100%;
    height:auto;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {

    max-width:64vw;
    margin:auto;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {

    img {
      width:77vw;
    }
  }
`