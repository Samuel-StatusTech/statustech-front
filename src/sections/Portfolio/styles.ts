import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;
  padding-bottom:20rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:10rem;
  }
`

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:6.5rem;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:2.3rem;
  }
`

export const Top = styled.div`
  display:flex;
  justify-content:space-between;
  gap:10rem;
`

export const Titles = styled.div`
  position:relative;
`

export const ProjectsGridWrapper = styled.div`
  max-width:100%;
  position:relative;
`

export const ProjectsGrid = styled.div`

  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:2.5rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    display:flex;
    grid-template-columns:unset;
    overflow:auto;
    width:calc(100% + ${p => p.theme.containers.main});

    &::-webkit-scrollbar {
      height:0;
    }
  }
`