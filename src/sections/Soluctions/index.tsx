import React, { forwardRef } from 'react'
import * as S from './styles'
import soluctions from '../../utils/consts/soluctions'
import SoluctionCard from '../../components/SoluctionCards'


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Soluctions = forwardRef<HTMLElement, Props>((props, ref) => {


  return (
    <S.Section ref={ref}>
      <S.Content className='container'>
        <h2 className='sectionName'>Soluções</h2>
        <h1 className='sectionTitle'>Conte conosco para:</h1>
      </S.Content>
      <S.CardsArea className='container'>
        {soluctions.map((s, k) => <SoluctionCard key={k} info={s} />)}
      </S.CardsArea>
    </S.Section>
  )

})


export default Soluctions