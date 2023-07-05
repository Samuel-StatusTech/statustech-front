import styled from "styled-components"
import Sconsts from "../../styled/consts";


export const Area = styled.div`
  position:relative;
  background-color:#292B2D;
  border-radius:9px;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    width:100%;
  }
`

export const OptionsDropdown = styled.div`
  position:relative;
  display:none;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    display:block;
  }
`

export const TopVisible = styled.div<{ expanded: boolean; }>`
  padding:.63rem 1.3rem;
  display:flex;
  justify-content:space-between;
  align-items:center;

  span {
    font-size:2rem;
    color:${p => p.theme.text.lightwhite};
  }

  svg {
    max-width:3.2rem;
    transform:rotate(${p => p.expanded ? -180 : 0}deg);
    transition:transform .4s;
  }
`

export const MenuWrapper = styled.div<{ expanded: boolean; }>`
  position:absolute;
  display:none;
  grid-template-rows:${p => p.expanded ? 1 : 0}fr;
  transition:grid-template-rows .4s;
  z-index:100;
  width:100%;
  top:calc(100% + .4rem);
  overflow:hidden;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    display:grid;
  }
`

export const Menu = styled.div`
  background-color:#292B2D;
  display:flex;
  flex-direction:column;
  border-radius:9px;
  align-items:flex-start;
  box-shadow:0 6px 10px rgba(0,0,0,0.3);
  overflow:hidden;

  & div {
    padding:1 1.3rem;
    width:100%;
    justify-content:flex-start;

    &:nth-first-child() { padding-top:1.63rem; }
    &:nth-last-child() { padding-bottom:1.63rem; }
  }
`

export const FiltersRow = styled.div`
  display:flex;
  padding:1rem 4rem;
  gap:3.5rem;
  border-radius:9px;
  width:fit-content;
  align-items:stretch;

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    display:none;
  }
`

export const FilterItem = styled.div<{ active: boolean; }>`
  font-size:2rem;
  font-family:${p => p.active ? 'Poppins-Semibold' : 'Poppins'};
  font-weight:${p => p.active ? '700' : 'normal'};
  color:${p => p.active ? p.theme.text.lightwhite : p => p.theme.text.lightgrey};
  padding:1rem;
  display:grid;
  place-items:center;
  cursor:pointer;
  transition:color .4s;

  &:hover {
    color:${p => p.theme.text.lightwhite};
  }
`