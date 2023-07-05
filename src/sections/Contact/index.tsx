import React, { useState } from 'react'
import * as S from './styles'
import { ContactImage } from '../../utils/resumedImports/images'
import { Captcha, Check } from '../../utils/resumedImports/icons'
import Button from '../../components/Button'


const Contact = () => {

  const [isRobot, setIsRobot] = useState(false)


  return (
    <S.Section>
      <S.Content className='container'>
        <S.ImageArea>
          <img src={ContactImage} alt='Entre em contato' />
        </S.ImageArea>
        <S.FormArea>
          <h1 className='sectionTitle'>Contato</h1>
          <p className='sectionDescription'>Envia uma mensagem pra gente, nossa equipe vai entrar em contato o mais breve possível!</p>
          <S.FieldsArea>
            <S.Input placeholder="Nome" />
            <S.Input placeholder="E-mail" />
            <S.Textarea placeholder="Sua mensagem" />
            <S.SendArea>
              <S.CaptchaArea onClick={() => setIsRobot(!isRobot)}>
                <S.CaptchaCheck>
                  {isRobot ? <Check /> : null}
                </S.CaptchaCheck>
                <span>Não sou um robô</span>
                <Captcha />
              </S.CaptchaArea>
              <Button text='Enviar mensagem' />
            </S.SendArea>
          </S.FieldsArea>
        </S.FormArea>
      </S.Content>
    </S.Section>
  )

}


export default Contact