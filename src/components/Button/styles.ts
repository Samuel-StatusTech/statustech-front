import styled from "styled-components"


export const Element = styled.button`
  background:${p => p.theme.pallete.gradient};
  font-size:2rem;
  padding:1.2rem 3.5rem;
  border-radius:5.5rem;
  color:#000;
  border:none;
  outline:none;
  cursor:pointer;
  box-shadow:${p => p.theme.shadows.button};
`