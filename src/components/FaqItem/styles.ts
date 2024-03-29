import styled from "styled-components"
import Sconsts from "../../styled/consts"


export const Item = styled.div`
  display:flex;
  flex-direction:column;
  padding-bottom:3.5rem;
  border-bottom:2px solid ${p => p.theme.text.lightwhite};
  max-width:114rem;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:3rem;
  }
`

export const Top = styled.div`
  display:flex;
  justify-content:space-between;
  gap:4rem;
  cursor:pointer;

  svg {
    width:4.5rem;
    height:4.5rem;
  }
`

export const Question = styled.span`
  font-family:Poppins-Light;
  font-size:2.8rem;
  color:${p => p.theme.text.lightwhite};

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    font-size:2rem;
  }
`

export const AnswerWrapper = styled.div<{ opened: boolean; }>`
  display:grid;
  grid-template-rows:${p => p.opened ? 1 : 0}fr;
  transition:grid-template-rows .4s;
`

export const AnswerArea = styled.div`
  overflow:hidden;
  transform:translateY(2rem);
`

export const Answer = styled.span`
  font-size:2rem;
  color:${p => p.theme.text.lightgrey};

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    font-size:1.6rem;
  }
`
