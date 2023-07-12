import React, { forwardRef } from 'react'
import * as S from './styles'
import { HeroImage, MobileHero, TabletHero } from '../../utils/resumedImports/images'
import Sconsts from '../../styled/consts';
import { LazyLoadImage } from 'react-lazy-load-image-component';


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Hero = forwardRef<HTMLElement, Props>((props, ref) => {

  const renderImage = () => {
    const windowSize = window.document.body.clientWidth

    const size = {
      desktop: windowSize > Sconsts.breakpoints.tablet,
      tablet: windowSize <= Sconsts.breakpoints.tablet &&
        windowSize > Sconsts.breakpoints.cellphone,
      cell: windowSize <= Sconsts.breakpoints.cellphone
    }

    return (
      <LazyLoadImage
        src={(size.desktop) ? HeroImage : (size.tablet) ? TabletHero : MobileHero}
        alt='Soluções digitais'
        width={(size.desktop) ? 630 : (size.tablet) ? 550 : 304}
        height={(size.desktop) ? 730 : (size.tablet) ? 614 : 340}
        effect='blur'
        placeholderSrc={(size.desktop) ? HeroImage : (size.tablet) ? TabletHero : MobileHero}
      />
    )

  }


  return (
    <S.Section ref={ref}>
      <S.Content className='container'>
        <S.Texts>
          <h2 className='sectionName'>Soluções digitais</h2>
          <h1 className='sectionTitle'>Com a tecnologia que você precisa!</h1>
          <p className='sectionDescription'>Somos uma empresa especializada em criação de sites, aplicativos, dispositivos inteligentes e sistemas web.</p>
        </S.Texts>
        <S.ImageWrapper>
          {renderImage()}
        </S.ImageWrapper>
      </S.Content>
    </S.Section>
  )

})


export default Hero