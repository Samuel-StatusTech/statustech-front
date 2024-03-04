import React from 'react'
import * as S from "./styles"
import { Soluction } from '../../utils/types/soluction'


type Props = {
  info: Soluction;
}

const SoluctionCard = ({ info }: Props) => {


  return (
    <S.Card id={info.tag}>
      {<info.icon />}
      <S.CardInfo>
        <S.SoluctionName>{info.name}</S.SoluctionName>
        <S.SoluctionDescription>{info.description}</S.SoluctionDescription>
      </S.CardInfo>
    </S.Card>
  )

}


export default SoluctionCard