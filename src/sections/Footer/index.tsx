import React from 'react'
import * as S from './styles'
import { Location, LogoFull, Mail, Phone } from '../../utils/resumedImports/icons'


type Props = {
  refs: {
    services: React.MutableRefObject<HTMLElement | null>
    about: React.MutableRefObject<HTMLElement | null>
    faq: React.MutableRefObject<HTMLElement | null>
    contact: React.MutableRefObject<HTMLElement | null>
  }
}

const Footer = ({refs}: Props) => {


  return (
    <S.Footer>
      <S.Content className='container'>
        <S.CopyArea>
          <LogoFull />
          <S.CompanyRole>A Tecnologia que sua empresa precisa!</S.CompanyRole>
          <S.RightsArea>
            <span>2023 © StatusTech.</span><br />
            <span>Todos os direitos reservados.</span>
          </S.RightsArea>
        </S.CopyArea>
        <S.LinksCol>
          <S.ColTitle>Serviços</S.ColTitle>
          <S.Links>
            <S.Link href={'#apps'}>Aplicativos</S.Link>
            <S.Link href={'#systems'}>Sistemas</S.Link>
            <S.Link href={'#design'}>Design</S.Link>
            <S.Link href={'#smart'}>SmartThings</S.Link>
          </S.Links>
        </S.LinksCol>
        <S.LinksCol>
          <S.ColTitle>Empresa</S.ColTitle>
          <S.Links>
            <S.Link>Sobre</S.Link>
            <S.Link>Portfolio</S.Link>
            <S.Link>FAQ</S.Link>
            <S.Link>Contato</S.Link>
          </S.Links>
        </S.LinksCol>
        <S.ContactArea>
          <S.ColTitle>Fale conosco</S.ColTitle>
          <S.Ways>
            <S.Link>
              <Mail />
              <span>contato@statustech.app</span>
            </S.Link>
            <S.Link>
              <Phone />
              <span>+55 (48) 3197-4808</span>
            </S.Link>
            <S.Link>
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