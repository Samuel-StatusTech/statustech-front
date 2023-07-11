import React from 'react'
import * as S from './styles'
import Button from '../Button'


type Props = {
  info: {
    title: string;
    message: string;
    showing: boolean;
  }
  closeModal: () => void;
}

const Modal = ({ info, closeModal }: Props) => {



  return (
    <S.Bg>
      <S.Box>
        <S.Title>{info.title}</S.Title>
        <S.Instructions>{info.message}</S.Instructions>
        <Button text='Valeu!' onClick={closeModal} />
      </S.Box>
    </S.Bg>
  )

}


export default Modal