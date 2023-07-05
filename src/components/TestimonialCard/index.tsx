import React from 'react'
import * as S from "./styles"
import { Testimonial } from '../../utils/types/testimonial'


type Props = {
  info: Testimonial;
}

const TestimonialCard = ({ info }: Props) => {


  return (
    <S.Card>
      <S.Top>
        <S.ImgBg>
          <img src={info.image} alt={info.name} />
        </S.ImgBg>
        <S.Info>
          <S.Name>{info.name}</S.Name>
          <S.Role>{info.role}</S.Role>
        </S.Info>
      </S.Top>
      <S.Text>{info.text}</S.Text>
    </S.Card>
  )

}


export default TestimonialCard