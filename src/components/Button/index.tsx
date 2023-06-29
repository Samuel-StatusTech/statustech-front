import React from 'react'
import * as S from "./styles"


type Props = {
  text: string;
}

const Button = ({ text }: Props) => {


  return (
    <S.Element id='getInTouchHeaderBtn'>{text}</S.Element>
  )

}


export default Button