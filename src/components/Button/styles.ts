import styled from "styled-components"


export const Element = styled.button<{ enabled: boolean; }>`
  background:${p => p.theme.pallete.gradient};
  font-size:2rem;
  padding:1.2rem 3.5rem;
  border-radius:5.5rem;
  color:#000;
  border:none;
  outline:none;
  cursor:${p => p.enabled ? 'pointer' : 'default'};
  opacity: ${p => p.enabled ? 1 : 0.5};
  transition:opacity .4s;
  box-shadow:${p => p.theme.shadows.button};
`