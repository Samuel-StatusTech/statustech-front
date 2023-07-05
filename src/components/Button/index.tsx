import React from 'react'
import * as S from "./styles"


type Props = {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: Props) => {


  return (
    <S.Element id='getInTouchHeaderBtn' onClick={onClick}>{text}</S.Element>
  )

}


export default Button