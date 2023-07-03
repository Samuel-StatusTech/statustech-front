import React from 'react'
import * as S from './styles'
import { HeroImage } from '../../utils/resumedImports/images'


const Hero = () => {


  return (
    <S.Section>
      <S.Content>
        <S.Texts>
          <h2 className='sectionName'>Soluções digitais</h2>
          <h1 className='sectionTitle'>Com a tecnologia que você precisa!</h1>
          <p className='sectionDescription'>Somos uma empresa especializada em criação de sites, aplicativos, dispositivos inteligentes e sistemas web.</p>
        </S.Texts>
        <img src={HeroImage} alt='Soluções digitais' loading='lazy' />
      </S.Content>
    </S.Section>
  )

}


export default Hero