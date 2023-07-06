import React, { forwardRef, useEffect, useState } from 'react'
import * as S from './styles'
import { ContactImage } from '../../utils/resumedImports/images'
import { Captcha, Check } from '../../utils/resumedImports/icons'
import Button from '../../components/Button'
import { useApi } from '../../Api'
import maskEmail from '../../utils/functions/maskEmail'
import { ErrorsChecks } from '../../utils/types/errorschecks'


type Props = {
  toggleModal: (show: boolean) => void;
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Contact = forwardRef<HTMLElement, Props>(({ toggleModal }, ref) => {

  const Api = useApi()

  const [isRobot, setIsRobot] = useState(true)
  const [isSendDisabled, setSendDisabled] = useState(true)
  const [values, setValues] = useState<{ name: string; email: string; message: string; }>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<ErrorsChecks>({
    name: { is: false, message: 'Escreva seu nome' },
    email: { is: false, message: 'Digite um email válido', match: false },
    message: { is: false, message: 'Escreva sua mensagem' },
  })

  const setValue = (field: 'name' | 'email' | 'message', value: string) => {
    switch (field) {
      case 'name':
        setValues({ ...values, name: value })
        setErrors({
          ...errors,
          name: { ...errors.name, is: false }
        })
        break;
      case 'email':
        const parsed = maskEmail(value)
        setValues({ ...values, email: parsed.parsed })
        setErrors({
          ...errors,
          email: { ...errors.email, is: false }
        })
        break;
      case 'message':
        setValues({ ...values, message: value })
        setErrors({
          ...errors,
          message: { ...errors.message, is: false }
        })
        break;
      default:
        return null
        break;
    }
  }

  const cleanFields = () => {
    setValues({ name: '', email: '', message: '' })
    setIsRobot(true)
    setSendDisabled(true)

    setErrors({
      name: { is: false, message: '' },
      email: { is: false, message: '', match: false },
      message: { is: false, message: '' },
    })
  }

  const handleSend = async () => {

    if (!isSendDisabled) {
      if (errors.email.match) {
        const send = await Api.sendEmail(values)
        if (send.status === 400 || send.status === 404) {
          toggleModal(true)
        } else {
          toggleModal(false)

          cleanFields()
        }
      } else {
        let newErrorsObj: ErrorsChecks = { ...errors }

        if (!errors.email.match) {
          newErrorsObj.email = { ...newErrorsObj.email, is: true }
        }

        setErrors(newErrorsObj)
      }
    }

    return true
  }

  useEffect(() => {
    const fieldsFilled = Object.entries(values).every(f => f[1].trim() !== '')
    const noErrors = Object.entries(errors).every(field => field[1].is === false)

    if (fieldsFilled && noErrors && isRobot === false) {
      setSendDisabled(false)
    } else {
      setSendDisabled(true)
    }
  }, [errors, isRobot, values])

  return (
    <S.Section ref={ref}>
      <S.Content className='container'>
        <S.ImageArea>
          <img src={ContactImage} alt='Entre em contato' />
        </S.ImageArea>
        <S.FormArea>
          <h1 className='sectionTitle'>Contato</h1>
          <p className='sectionDescription'>Envia uma mensagem pra gente, nossa equipe vai entrar em contato o mais breve possível!</p>
          <S.FieldsArea>
            <S.FieldArea showingError={errors.name.is}>
              <S.Input
                placeholder="Nome"
                value={values.name}
                onChange={e => setValue('name', e.target.value)}
                error={errors.name}
              />
              <span>{errors.name.message}</span>
            </S.FieldArea>
            <S.FieldArea showingError={errors.email.is}>
              <S.Input
                placeholder="E-mail"
                value={values.email}
                onChange={e => setValue('email', e.target.value)}
                error={errors.email}
              />
              <span>{errors.email.message}</span>
            </S.FieldArea>
            <S.FieldArea showingError={errors.message.is}>
              <S.Textarea
                placeholder="Sua mensagem"
                value={values.message}
                onChange={e => setValue('message', e.target.value)}
                error={errors.message}
              />
              <span>{errors.message.message}</span>
            </S.FieldArea>
            <S.SendArea>
              <S.CaptchaArea onClick={() => setIsRobot(!isRobot)}>
                <S.CaptchaCheck>
                  {isRobot ? null : <Check />}
                </S.CaptchaCheck>
                <span>Não sou um robô</span>
                <Captcha />
              </S.CaptchaArea>
              <Button disabled={isSendDisabled} text='Enviar mensagem' onClick={handleSend} />
            </S.SendArea>
          </S.FieldsArea>
        </S.FormArea>
      </S.Content>
    </S.Section>
  )

})


export default Contact