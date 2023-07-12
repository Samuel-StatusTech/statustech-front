import React from 'react'
import * as S from "./styles"


type Props = {
  text: string;
  onClick?: () => void;
}

const Link = ({ text, onClick }: Props) => {


  return (
    <S.Element onClick={onClick} className='headerLink'>{text}</S.Element>
  )

}


export default Link