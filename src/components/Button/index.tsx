import React from 'react'
import * as S from "./styles"


type Props = {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
}

const Button = ({ disabled, text, onClick }: Props) => {


  return (
    <S.Element
      disabled={disabled ?? false}
      enabled={!disabled ?? true}
      id='getInTouchHeaderBtn'
      onClick={onClick}
    >
      {text}
    </S.Element>
  )

}


export default Button