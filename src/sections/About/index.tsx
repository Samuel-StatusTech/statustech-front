import React, { forwardRef } from 'react'
import * as S from './styles'
import { AboutBg } from '../../utils/resumedImports/icons'
import { AboutImage } from '../../utils/resumedImports/images'
import AboutQuality from '../../components/AboutQuality'


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const About = forwardRef<HTMLElement, Props>((props, ref) => {


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
              <AboutQuality
                name={"Inovação"}
                desc={"Buscamos alternativas inovadoras para os desafios tecnológicos modernos."}
              />
              <AboutQuality
                name={"Qualidade"}
                desc={"Produtos e serviços de alta qualidade que atendam suas expectativas."}
              />
              <AboutQuality
                name={"Responsabilidade social"}
                desc={"Ética e responsabilidade no impacto ambiental e social de nossas ações."}
              />
            </S.QualitiesList>
          </S.Texts>
          <S.SectionImg>
            <img src={AboutImage} alt='Inovação, Qualidade e Rresponsabilidade social' />
          </S.SectionImg>
          <S.DataBox>
            <S.Dinfo>
              <S.Dnumber className='aboutNumber'>280+</S.Dnumber>
              <S.Dtag>Projetos</S.Dtag>
            </S.Dinfo>
            <S.Dinfo>
              <S.Dnumber className='aboutNumber'>280+</S.Dnumber>
              <S.Dtag>Clientes</S.Dtag>
            </S.Dinfo>
            <S.Dinfo>
              <S.Dnumber className='aboutNumber'>3500+</S.Dnumber>
              <S.Dtag>Linhas de código</S.Dtag>
            </S.Dinfo>
          </S.DataBox>
        </S.MainContent>
      </S.Content>
    </S.Section>
  )

})


export default About