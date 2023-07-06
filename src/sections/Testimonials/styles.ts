import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  position:relative;
  padding:2rem 0 18rem ${p => p.theme.containers.main};

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding:2rem 0 6rem ${p => p.theme.containers.main};
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding:2rem 0 1rem ${p => p.theme.containers.mobile};
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
  padding-right:${p => p.theme.containers.main};

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-right:${p => p.theme.containers.mobile};
  }
`

export const Titles = styled.div`
  position:relative;
`

export const CardsWrapper = styled.div`
  position:relative;
`

export const CardsList = styled.div<{ itemN: number; }>`
  display:flex;
  gap:6.5rem;
  transition:margin-left .4s;
  margin-left:calc(${p => p.itemN} * -83.9rem);

  &::-webkit-scrollbar {
    height:0;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    overflow-x:auto;
    padding-right:${p => p.theme.containers.main};

    @media (max-width:${Sconsts.breakpoints.cellphone}px) {
      padding-right:${p => p.theme.containers.mobile};
    }
  }
`

export const ControlsArea = styled.div`
  display:flex;
  align-items:center;
  gap:2rem;
  padding-right:${p => p.theme.containers.main};

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-right:${p => p.theme.containers.mobile};
  }
`

export const ProgressArea = styled.div<{ percent: number; mlPercent: number; }>`
  flex:1;
  background:#90A1A5;
  height:2px;

  &::after {
    content:'';
    display:block;
    background:${p => p.theme.pallete.gradient};
    width:${p => p.percent}%;
    height:2px;
    transition:width .4s;

    @media (max-width:${Sconsts.breakpoints.tablet}px) {
      transition:width 0s;
      width:${p => p.mlPercent}%;
      max-width:100%;
    }
  }
`

export const ButtonsArea = styled.div`
  display:flex;
  gap:2.4rem;

  svg {
    cursor:pointer;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    display:none;
  }
`
