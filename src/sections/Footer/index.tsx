import React from "react"
import * as S from "./styles"
import {
  Location,
  LogoFull,
  Mail,
  Phone,
} from "../../utils/resumedImports/icons"

type Props = {
  refs: {
    services: React.MutableRefObject<HTMLElement | null>
    about: React.MutableRefObject<HTMLElement | null>
    faq: React.MutableRefObject<HTMLElement | null>
    contact: React.MutableRefObject<HTMLElement | null>
  }
}

const Footer = ({ refs }: Props) => {
  const handleClick = (
    ev: any,
    ref: React.MutableRefObject<HTMLElement | null>
  ) => {
    ev.preventDefault()
    if (ref.current) ref.current.scrollIntoView()
  }

  return (
    <S.Footer>
      <S.Content className="container">
        <S.CopyArea>
          <LogoFull />
          <S.CompanyRole>A Tecnologia que sua empresa precisa!</S.CompanyRole>
          <S.RightsArea>
            <span>2023 © StatusTech.</span>
            <br />
            <span>Todos os direitos reservados.</span>
          </S.RightsArea>
        </S.CopyArea>
        <S.LinksCol>
          <S.ColTitle>Serviços</S.ColTitle>
          <S.Links>
            <S.Link href={"#apps"}>Aplicativos</S.Link>
            <S.Link href={"#systems"}>Sistemas</S.Link>
            <S.Link href={"#design"}>Design</S.Link>
            <S.Link href={"#smart"}>SmartThings</S.Link>
          </S.Links>
        </S.LinksCol>
        <S.LinksCol>
          <S.ColTitle>Empresa</S.ColTitle>
          <S.Links>
            <S.Link onClick={(ev) => handleClick(ev, refs.about)}>Sobre</S.Link>
            <S.Link onClick={(ev) => handleClick(ev, refs.faq)}>FAQ</S.Link>
            <S.Link onClick={(ev) => handleClick(ev, refs.contact)}>
              Contato
            </S.Link>
          </S.Links>
        </S.LinksCol>
        <S.ContactArea>
          <S.ColTitle>Fale conosco</S.ColTitle>
          <S.Ways>
            <S.Link href={"mailto:email@gmail.com.br"}>
              <Mail />
              <span>contato@statustech.app</span>
            </S.Link>
            <S.Link href={"tel:+554831974808"}>
              <Phone />
              <span>+55 (48) 3197-4808</span>
            </S.Link>
            <S.Link
              href={
                "https://www.google.com/maps/place/Florian%C3%B3polis,+SC/@-27.5712064,-48.7999333,10z/data=!3m1!4b1!4m6!3m5!1s0x9527394eb2c632d7:0x81bc550b6a04c746!8m2!3d-27.5948036!4d-48.5569286!16s%2Fg%2F11bc6xlppd?entry=ttu"
              }
              target="_blank"
            >
              <Location />
              <span>Florianópolis - SC, Brasil</span>
            </S.Link>
          </S.Ways>
        </S.ContactArea>
      </S.Content>
    </S.Footer>
  )
}

export default Footer
