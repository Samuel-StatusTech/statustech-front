import React from 'react'
import * as S from "./styles"


type Props = {
  text: string;
}

const Link = ({ text }: Props) => {


  return (
    <S.Element>{text}</S.Element>
  )

}


export default Link