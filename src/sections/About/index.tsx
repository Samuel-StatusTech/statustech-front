import React, { forwardRef, useEffect, useRef, useState } from "react"
import * as S from "./styles"
import { AboutBg } from "../../utils/resumedImports/icons"
import { AboutImage } from "../../utils/resumedImports/images"
import AboutQuality from "../../components/AboutQuality"
import { useSpring, animated } from "react-spring"

type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>
}

const Number = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return (
    <animated.span className={"animatedSpan"}>
      {number.to((n) => n.toFixed(0))}
    </animated.span>
  )
}

const About = forwardRef<HTMLElement, Props>((props, ref) => {
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [show, setShow] = useState(false)

  const renderNumber = (n: number) => {
    return (
      <S.AnimNmbContainer>
        {show ? (
          <Number n={n} />
        ) : (
          <S.Dnumber className="aboutNumber">0</S.Dnumber>
        )}
        <S.Dnumber className="aboutNumber">+</S.Dnumber>
      </S.AnimNmbContainer>
    )
  }

  useEffect(() => {
    const screenHeight = window.screen.height
    const box = boxRef.current as HTMLElement
    const spacing = 120

    const fn = () => {
      const boxPos = box.getBoundingClientRect().top

      if (!show && boxPos < screenHeight + spacing) {
        setShow(true)
        document.removeEventListener("scroll", fn)
      }
    }

    if (box) document.addEventListener("scroll", fn)
  }, [show])

  return (
    <S.Section ref={ref}>
      <AboutBg />
      <S.Content className="container">
        <S.Titles>
          <h2 className="sectionName">Sobre nós</h2>
          <h1 className="sectionTitle">
            Nós entendemos as
            <br />
            suas necessidades
          </h1>
        </S.Titles>
        <S.MainContent>
          <S.Texts>
            <p className="sectionDescription">
              Com anos de experiência em criação de soluções tecnológicas,
              oferecemos opções personalizadas e inovadoras. Além disso, nossa
              equipe altamente capacitada garante suporte técnico contínuo para
              garantir o sucesso do seu negócio.
            </p>
            <S.QualitiesList>
              <AboutQuality
                name={"Inovação"}
                desc={
                  "Buscamos alternativas inovadoras para os desafios tecnológicos modernos."
                }
              />
              <AboutQuality
                name={"Qualidade"}
                desc={
                  "Produtos e serviços de alta qualidade que atendam suas expectativas."
                }
              />
              <AboutQuality
                name={"Responsabilidade social"}
                desc={
                  "Ética e responsabilidade no impacto ambiental e social de nossas ações."
                }
              />
            </S.QualitiesList>
          </S.Texts>
          <S.SectionImg>
            <img
              src={AboutImage}
              alt="Inovação, Qualidade e Rresponsabilidade social"
              loading="lazy"
            />
          </S.SectionImg>
          <S.DataBox ref={boxRef}>
            <S.Dinfo>
              {renderNumber(280)}
              <S.Dtag>Projetos</S.Dtag>
            </S.Dinfo>
            <S.Dinfo>
              {renderNumber(100000)}
              <S.Dtag>Linhas de código</S.Dtag>
            </S.Dinfo>
          </S.DataBox>
        </S.MainContent>
      </S.Content>
    </S.Section>
  )
})

export default About
