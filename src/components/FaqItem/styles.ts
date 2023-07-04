import styled from "styled-components"


export const Item = styled.div`
  display:flex;
  flex-direction:column;
  padding-bottom:2.8rem;
  border-bottom:2px solid ${p => p.theme.text.lightwhite};
  max-width:114rem;
`

export const Top = styled.div`
  display:flex;
  justify-content:space-between;

  svg {
    width:4.5rem;
    height:4.5rem;
    cursor:pointer;
  }
`

export const Question = styled.span`
  font-family:Poppins-Light;
  font-size:2.8rem;
  color:${p => p.theme.text.lightwhite};
`

export const AnswerWrapper = styled.div<{ opened: boolean; }>`
  display:grid;
  grid-template-rows:${p => p.opened ? 1 : 0}fr;
  transition:grid-template-rows .4s;
`

export const AnswerArea = styled.div`
  overflow:hidden;
  transform:translateY(1rem);
`

export const Answer = styled.span`
  font-size:2rem;
  color:${p => p.theme.text.lightgrey};
  transform:translateY(1rem);
`
