import React from 'react'
import * as S from './styles'

import { LogoFull } from '../../utils/resumedImports/icons'
import Button from '../../components/Button'
import Link from '../../components/Link'
import BurguerMenu from './BurguerMenu'



const Header = () => {


  return (
    <S.Section>
      <S.Content className='container'>
      <LogoFull />
      <S.LinksArea id='headerLinksArea'>
        <Link text='Home' />
        <Link text='Soluções' />
        <Link text='Sobre' />
        <Link text='FAQ' />
        <Link text='Portfólio' />
      </S.LinksArea>
      <Button text="Entre em contato" />
      <BurguerMenu />
      </S.Content>
    </S.Section>
  )

}


export default Header