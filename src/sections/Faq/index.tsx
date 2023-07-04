import React from 'react'
import * as S from './styles'
import { FaqImage } from '../../utils/resumedImports/images'
import { FaqBg } from '../../utils/resumedImports/icons'
import faqs from '../../utils/consts/faqs'
import FaqItem from '../../components/FaqItem'


const Faq = () => {


  return (
    <S.Section>
      <FaqBg />
      <S.Content>
        <S.Top>
          <S.Titles>
            <h2 className='sectionName'>FAQ</h2>
            <h1 className='sectionTitle'>Perguntas frequentes</h1>
          </S.Titles>
          <img src={FaqImage} alt='FAQ' />
        </S.Top>
        <S.ListArea>
          {faqs.map((f, k) => (
            <FaqItem key={k} question={f.question} answer={f.answer} />
          ))}
        </S.ListArea>
      </S.Content>
    </S.Section>
  )

}


export default Faq