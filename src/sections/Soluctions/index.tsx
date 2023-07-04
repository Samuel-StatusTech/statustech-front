import React from 'react'
import * as S from './styles'
import soluctions from '../../utils/consts/soluctions'
import SoluctionCard from '../../components/SoluctionCards'


const Soluctions = () => {


  return (
    <S.Section>
      <S.Content className='container'>
        <h2 className='sectionName'>Soluções</h2>
        <h1 className='sectionTitle'>Conte conosco para:</h1>
      </S.Content>
      <S.CardsArea className='container'>
        {soluctions.map((s, k) => (
          <SoluctionCard key={k} info={s} />
        ))}
      </S.CardsArea>
    </S.Section>
  )

}


export default Soluctions