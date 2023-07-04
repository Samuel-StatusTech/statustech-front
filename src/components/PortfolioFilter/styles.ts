import styled from "styled-components"


export const Area = styled.div`
  display:flex;
  padding:1rem 5rem;
`

export const FilterItem = styled.div<{ active: boolean; }>`
  font-size:2rem;
  font-family:${p => p.active ? 'Poppins' : 'Poppins-Bold'};
  color:${p => p.active ? p.theme.text.lightwhite : p => p.theme.text.lightgrey};
`