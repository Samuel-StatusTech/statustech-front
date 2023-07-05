import React, { useRef } from 'react'
import * as S from "./styles"
import { BurguerIcon } from '../../../utils/resumedImports/icons'
import Link from '../../../components/Link'


const BurguerMenu = () => {

  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    const el = menuRef.current
    if (el) {
      el.classList.toggle('showing')
    }
  }

  const handlePick = () => {
    menuRef.current?.classList.remove('showing')
  }


  return (
    <S.Area id="burguerMenu">
      <BurguerIcon onClick={handleClick} />
      <S.MenuBg ref={menuRef}>
        <S.MenuContainer>
          <S.MenuArea>
            <BurguerIcon onClick={handleClick} />
            <Link text='Home' onClick={handlePick} />
            <Link text='Soluções' onClick={handlePick} />
            <Link text='Sobre' onClick={handlePick} />
            <Link text='FAQ' onClick={handlePick} />
            <Link text='Portfólio' onClick={handlePick} />
          </S.MenuArea>
        </S.MenuContainer>
      </S.MenuBg>
    </S.Area>
  )

}


export default BurguerMenu