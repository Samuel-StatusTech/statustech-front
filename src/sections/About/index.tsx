import React, { forwardRef } from 'react'
import * as S from './styles'
import { AboutBg, Bullet } from '../../utils/resumedImports/icons'
import { AboutImage } from '../../utils/resumedImports/images'


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const About = forwardRef<HTMLElement, Props>(({}, ref) => {


  return (
    <S.Section ref={ref}>
      <AboutBg />
      <S.Content className='container'>
        <S.Titles>
          <h2 className='sectionName'>Sobre nós</h2>
          <h1 className='sectionTitle'>Nós entendemos as<br />suas necessidades</h1>
        </S.Titles>
        <S.MainContent>
          <S.Texts>
            <p className='sectionDescription'>Com anos de experiência em criação de soluções tecnológicas, oferecemos opções personalizadas e inovadoras. Além disso, nossa equipe altamente capacitada garante suporte técnico contínuo para garantir o sucesso do seu negócio.</p>
            <S.QualitiesList>
              <S.Item>
                <S.ItemTitle>
                  <Bullet />
                  <S.QualityName>Inovação</S.QualityName>
                </S.ItemTitle>
                <S.ItemDesc>Buscamos alternativas inovadoras para os desafios tecnológicos modernos.</S.ItemDesc>
              </S.Item>
              <S.Item>
                <S.ItemTitle>
                  <Bullet />
                  <S.QualityName>Qualidade</S.QualityName>
                </S.ItemTitle>
                <S.ItemDesc>Produtos e serviços de alta qualidade que atendam suas expectativas.</S.ItemDesc>
              </S.Item>
              <S.Item>
                <S.ItemTitle>
                  <Bullet />
                  <S.QualityName>Responsabilidade social</S.QualityName>
                </S.ItemTitle>
                <S.ItemDesc>Ética e responsabilidade no impacto ambiental e social de nossas ações.</S.ItemDesc>
              </S.Item>
            </S.QualitiesList>
          </S.Texts>
          <S.SectionImg>
            <img src={AboutImage} alt='Inovação, Qualidade e Rresponsabilidade social' />
          </S.SectionImg>
          <S.DataBox>
            <S.Dinfo>
              <S.Dnumber>280+</S.Dnumber>
              <S.Dtag>Projetos</S.Dtag>
            </S.Dinfo>
            <S.Dinfo>
              <S.Dnumber>280+</S.Dnumber>
              <S.Dtag>Clientes</S.Dtag>
            </S.Dinfo>
            <S.Dinfo>
              <S.Dnumber>3500+</S.Dnumber>
              <S.Dtag>Linhas de código</S.Dtag>
            </S.Dinfo>
          </S.DataBox>
        </S.MainContent>
      </S.Content>
    </S.Section>
  )

})


export default About