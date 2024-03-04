import React, { forwardRef } from 'react'
import * as S from './styles'
import { renderImage } from '../../utils/functions/renderHeroImage'


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Hero = forwardRef<HTMLElement, Props>((props, ref) => {


  return (
    <S.Section ref={ref}>
      <S.Content className='container'>
        <S.Texts>
          <h2 className='sectionName'>Soluções Digitais</h2>
          <h1 className='sectionTitle'>Com a tecnologia que você precisa!</h1>
          <p className='sectionDescription'>A Status Tech é uma empresa remota com mais de 10 anos de experiência, especializada em soluções tecnológicas como desenvolvimento de apps, websites e sistemas de gestão, pronta para impulsionar sua presença digital.</p>
        </S.Texts>
        <S.ImageWrapper>
          {renderImage()}
        </S.ImageWrapper>
      </S.Content>
    </S.Section>
  )

})


export default Hero