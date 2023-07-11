import styled from "styled-components"


export const Element = styled.button<{ enabled: boolean; }>`
  background:${p => p.enabled ? p.theme.pallete.gradient : p.theme.pallete.projectcontent};
  font-size:2rem;
  padding:1.2rem 3.5rem;
  border-radius:5.5rem;
  color:#000;
  border:none;
  outline:none;
  cursor:${p => p.enabled ? 'pointer' : 'default'};
  transition:opacity .4s;
  box-shadow:${p => p.enabled ? p.theme.shadows.button : ''};
`