import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  padding:4rem ${p => p.theme.containers.main};

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    
    padding-top:5rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    
    padding:5rem ${p=>p.theme.containers.mobile};
  }
`

export const Content = styled.div`
  display:flex;
  gap:5.5rem;
  justify-content:space-between;
  align-items:top;

  img {
    width:50%;
    height:auto;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    
    flex-direction:column;
    gap:6rem;

    img {
      width:65vw;
      margin:auto;
    }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {

    img {
      width:77vw;
    }
  }
`

export const Texts = styled.div`
  margin-top:12rem;
  display:flex;
  flex-direction:column;
  flex:1;
  gap:2.5rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    
    margin-top:0rem;
  }
`