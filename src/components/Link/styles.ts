import styled from "styled-components"


export const Element = styled.a`
  text-decoration:none;
  font-size:2rem;
  padding:0 3rem;
  cursor:pointer;
  transition:-webkit-text-fill-color .3s;
  -webkit-text-fill-color:${({ theme }) => theme.text.primary};
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
      background:${({ theme }) => theme.pallete.gradient};
    }
  }
`