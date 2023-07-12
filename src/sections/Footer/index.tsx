import * as S from './styles'
import { Location, LogoFull, Mail, Phone } from '../../utils/resumedImports/icons'


const Footer = () => {


  return (
    <S.Footer>
      <S.Content className='container'>
        <S.CopyArea>
          <LogoFull />
          <S.CompanyRole>Soluções web e mobile com tecnologia de ponta para atender sua empresa.</S.CompanyRole>
          <S.RightsArea>
            <span>2023 © StatusTech.</span><br />
            <span>Todos os direitos reservados.</span>
          </S.RightsArea>
        </S.CopyArea>
        <S.LinksCol>
          <S.ColTitle>Serviços</S.ColTitle>
          <S.Links>
            <S.Link>Aplicativos</S.Link>
            <S.Link>Sistemas</S.Link>
            <S.Link>Design</S.Link>
            <S.Link>SmartThings</S.Link>
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