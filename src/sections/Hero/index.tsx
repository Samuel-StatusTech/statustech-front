import React, { forwardRef } from 'react'
import * as S from './styles'
import { HeroImage } from '../../utils/resumedImports/images'
import Sconsts from '../../styled/consts';


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Hero = forwardRef<HTMLElement, Props>((props, ref) => {


  return (
    <S.Section ref={ref}>
      <S.Content className='container'>
        <S.Texts>
          <h2 className='sectionName'>Soluções digitais</h2>
          <h1 className='sectionTitle'>Com a tecnologia que você precisa!</h1>
          <p className='sectionDescription'>Somos uma empresa especializada em criação de sites, aplicativos, dispositivos inteligentes e sistemas web.</p>
        </S.Texts>
        <S.ImageWrapper>
          <img
            src={HeroImage}
            alt='Soluções digitais'
            width={window.document.body.clientWidth > Sconsts.breakpoints.tablet ? 630 : 304}
            height={window.document.body.clientWidth > Sconsts.breakpoints.tablet ? 730 : 340}
          />
        </S.ImageWrapper>
      </S.Content>
    </S.Section>
  )

})


export default Hero