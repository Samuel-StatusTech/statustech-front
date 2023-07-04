import React, { useState } from 'react'
import * as S from "./styles"
import { FaqType } from '../../utils/types/faqitem'
import { RetractIcon, ExpandIcon } from '../../utils/resumedImports/icons'


function FaqItem({ question, answer }: FaqType) {

  const [opened, setOpened] = useState(false)


  return (
    <S.Item>
      <S.Top onClick={() => setOpened(!opened)}>
        <S.Question>{question}</S.Question>
        {opened ?
          <RetractIcon />
          :
          <ExpandIcon />
        }
      </S.Top>
      <S.AnswerWrapper opened={opened}>
        <S.AnswerArea>
          <S.Answer>{answer}</S.Answer>
        </S.AnswerArea>
      </S.AnswerWrapper>
    </S.Item>
  )

}


export default FaqItem