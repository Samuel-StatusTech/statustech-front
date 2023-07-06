import styled from "styled-components"
import Sconsts from "../../../styled/consts"


export const Area = styled.div`
  display:none;
  position:relative;

  svg {
    max-width:45px;
    max-height:45px;
    top:1.5rem;
  }
`

export const MenuBg = styled.div`
  box-shadow:0 0 100px 0 rgba(0, 0, 0, 0);
  z-index:1000;

  &.showing > div {
    left:0;

    & > div {
      box-shadow:-4px 0 600px 600px rgba(0, 0, 0, 0.8);
    }
  }
`

export const MenuContainer = styled.div`
  position:fixed;
  display:flex;
  justify-content:flex-end;
  top:0;
  left:100%;
  bottom:0;
  width:100vw;
  transition:left .6s;
  z-index:1000;
`

export const MenuArea = styled.div`
  position:relative;
  background:${p => p.theme.pallete.bodybg};
  display:flex;
  flex-direction:column;
  height:100vh;
  width:80vw;
  transition:left .6s;
  z-index:1000;
  box-shadow:-4px 0 600px 600px rgba(0, 0, 0, 0);
  transition:box-shadow .6s;
  padding:20vh 3rem 3rem;
  gap:2rem;

  svg {
    position:absolute;
    left:0;
    top:15px;
    transform:translateX(calc(-100% - 15px));
    z-index:-1;
  }

  a { height:fit-content; }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-left:1.5rem;
  }
`
