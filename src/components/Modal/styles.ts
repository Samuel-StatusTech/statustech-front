import styled from "styled-components"
import Sconsts from "../../styled/consts"


export const Bg = styled.div`
  position:fixed;
  background-color: rgba(23, 25, 26, .8);
  z-index:1001;
  top:0;
  right:0;
  bottom:0;
  left:0;
  display:grid;
  place-items:center;
  padding:${p => p.theme.containers.mobile};
`

export const Box = styled.div`
  border-radius:24px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background: rgba(225, 236, 239, 1);
  padding:4rem 5.6rem 3.4rem;
  gap:3rem;
  max-width:calc(100% - 4rem);

  @media (max-width:540px) {
    padding:2rem 2.2rem 1.8rem;
  }
`

export const Title = styled.h1`
  font-family: Poppins-Medium;
  font-size: 6.4rem;
  line-height: 8.6rem;
  font-weight: 700;
  text-align: center;
  max-width:527px;
  color:${p=>p.theme.pallete.darkbg};

  @media (max-width:540px) {
    font-size:2.8rem;
    line-height:3.7rem;
  }
`

export const Instructions = styled.h2`
  font-family: Poppins-Thin;
  font-size: 2.8rem;
  line-height: 3.8rem;
  text-align: center;
  color:${p=>p.theme.pallete.darkbg};
  margin-bottom:10px;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    font-size:1.6rem;
    line-height:2.4rem;
  }
`