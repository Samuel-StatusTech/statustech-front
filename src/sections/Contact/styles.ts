import styled from "styled-components"
import Sconsts from "../../styled/consts"



export const Section = styled.section`
  padding-bottom:10.3rem;

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    padding-bottom:8.8rem;
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {
    padding-bottom:13.6rem;
  }
`

export const Content = styled.div`
  display:flex;
  justify-content:space-between;
  gap:4rem;
`

export const ImageArea = styled.div`
  flex:1;

  img {
    max-width:100%;
    height:auto;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    display:none;
  }
`

export const FormArea = styled.div`
  min-width:535px;
  max-width:535px;
  display:flex;
  flex-direction:column;
  gap:1.2rem;

  @media (max-width:1280px) {
    min-width:unset;
    max-width:45%;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    max-width:unset;
  }
`

export const FieldsArea = styled.div`
  margin-top:3.2rem;
  display:flex;
  flex-direction:column;
  gap:3rem;
`

export const FieldArea = styled.div<{ showingError: boolean; }>`
  display:flex;
  flex-direction:column;
  gap:4px;

  span {
    opacity:${p => p.showingError ? 1 : 0};
    transition:opacity .4s;
    font-size:1.6rem;
    margin-left:3.2rem;
    color:${p => p.theme.pallete.red};
    font-family:Poppins-Medium;
    font-weight:500;
  }
`

export const Input = styled.input<{ error: { is: boolean; message: string; } }>`
  padding:2.5rem 3rem;
  border-radius:9px;
  outline:none;
  border:2px solid ${p => p.error.is ? p.theme.pallete.red : 'transparent'};
  background-color:${p => p.error.is ? p.theme.pallete.lightred : p.theme.text.lightwhite};
  color:${p => p.error.is ? p.theme.pallete.red : p.theme.text.lightgrey};
  transition:border .4s, background-color .4s, color .4s;
  
  &,
  &::placeholder {
    font-size:2rem;
    line-height:3.1rem;
  }

  &::placeholder {
    color:${p => p.error.is ? p.theme.pallete.red : 'rgba(144, 161, 165, 1)'};
    transition:color .4s;
  }
`

export const Textarea = styled.textarea<{ error: { is: boolean; message: string; } }>`
  padding:2.5rem 3rem;
  border-radius:9px;
  outline:none;
  border:none;
  resize:none;
  height:12.6rem;
  background-color:${p => p.error.is ? p.theme.pallete.lightred : p.theme.text.lightwhite};
  color:${p => p.theme.text.lightgrey};
  transition:border .4s, background-color .4s, color .4s;
  
  &,
  &::placeholder {
    font-size:2rem;
    line-height:3.1rem;
  }

  &::placeholder {
    color:${p => p.error.is ? p.theme.pallete.red : 'rgba(144, 161, 165, 1)'};
    transition:color .4s;
  }
`

export const SendArea = styled.div`
  display:flex;
  gap:2rem;

  button {
    flex:1;
    white-space:nowrap;
  }

  @media (max-width:980px) {
    flex-direction:column;
    gap:5.8rem;

    button {
      padding-top:2.7rem;
      padding-bottom:2.7rem;
    }
  }

  @media (max-width:${Sconsts.breakpoints.cellphone}px) {

    button {
      padding:1.2rem 3.5rem;
      width:fit-content;
      margin:auto;
    }
  }
`

export const CaptchaArea = styled.div`
  max-width:50%;
  padding:1.2rem;
  background:rgba(250, 250, 250, 1);
  border-radius:6px;
  display:flex;
  align-items:center;
  gap:1.4rem;
  cursor:pointer;

  span {
    color:#292B2D;
    font-size:1.4rem;
    white-space:nowrap;
  }
  
  & > svg {
    margin-left:.7rem;
    min-width:2.4rem;
  }

  @media (max-width:${Sconsts.breakpoints.tablet}px) {
    width:fit-content;
    max-width:unset;
  }
`

export const CaptchaCheck = styled.div`
  display:grid;
  place-items:center;
  width:2.4rem;
  height:2.4rem;
  border-radius:1px;
  border:1px solid ${p => p.theme.text.lightgrey};

  svg {
    width:1.8rem;
    height:1.8rem;
  }

  @media (max-width:980px) {

    svg {
      width:1.6rem;
      height:1.6rem;
    }
  }
`
