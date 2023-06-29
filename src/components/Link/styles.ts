import styled from "styled-components"


export const Element = styled.a`
  text-decoration:none;
  font-size:2rem;
  padding:0 3rem;
  cursor:pointer;
  transition:-webkit-text-fill-color .3s;
  background:${p => p.theme.pallete.gradient};
  -webkit-text-fill-color:${p=>p.theme.text.primary};
  -webkit-background-clip:text;
  position:relative;

  &:after {
    content:'';
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    height:2px;
    background:transparent;
  }
  
  &:hover {
    -webkit-text-fill-color:transparent;

    &:after {
      background:${p => p.theme.pallete.gradient};
    }
  }
`